import sys
assert sys.version_info >= (3, 5) # make sure we have Python 3.5+
import re, string

from pyspark.sql import SparkSession, functions, types
from pyspark.sql.functions import udf, lower, col

def remove_punct(text):
    regex = re.compile('[' + re.escape(string.punctuation) + '0-9\\r\\t\\n]')
    nopunct = regex.sub(" ", text)
    return nopunct

def main(reviews, business, output):
    reviews = spark.read.json(reviews)
    business = spark.read.json(business)
    punct_remover = udf(lambda x: remove_punct(x))

    business.createOrReplaceTempView("business")
    bc_business = spark.sql("SELECT business_id FROM business WHERE state == 'BC'")
    bc_business.createOrReplaceTempView("bc_business")

    bc_reviews = reviews.join(bc_business, ["business_id"]).cache()
    bc_reviews = bc_reviews.withColumn("review_0", punct_remover("text")).drop("text")
    bc_reviews = bc_reviews.withColumn("review", lower(col("review_0"))).drop("review_0")

    bc_reviews.coalesce(1).write.option("header", "true").csv(output, mode = "overwrite")

if __name__ == '__main__':
    inputs1 = sys.argv[1]
    inputs2 = sys.argv[2]
    output = sys.argv[3]
    spark = SparkSession.builder.appName('Yelp Reviews ETL').getOrCreate()
    assert spark.version >= '3.0' # make sure we have Spark 3.0+
    spark.sparkContext.setLogLevel('WARN')
    sc = spark.sparkContext
    main(inputs1, inputs2, output)