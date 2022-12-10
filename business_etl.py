import sys
assert sys.version_info >= (3, 5) # make sure we have Python 3.5+

from pyspark.sql import SparkSession, functions, types

def main(inputs, output1, output2):
    business = spark.read.json(inputs)
    business.createOrReplaceTempView("business")
    bc_business = spark.sql("SELECT business_id, name, city, state, latitude, longitude, stars, review_count, categories\
        FROM business WHERE state == 'BC'").cache()
    bc_business.coalesce(1).write.option("header", "true").csv(output1, mode = "overwrite")

    split_col = functions.split(bc_business['categories'], ',')
    bc_business = bc_business.withColumn("categories", split_col)
    bc_business_categories = bc_business.select(bc_business.business_id, functions.explode(bc_business.categories))
    bc_business_categories.coalesce(1).write.option("header", "true").csv(output2, mode = "overwrite")


if __name__ == '__main__':
    inputs = sys.argv[1]
    output1 = sys.argv[2]
    output2 = sys.argv[3]
    spark = SparkSession.builder.appName('Yelp Business ETL').getOrCreate()
    assert spark.version >= '3.0' # make sure we have Spark 3.0+
    spark.sparkContext.setLogLevel('WARN')
    sc = spark.sparkContext
    main(inputs, output1, output2)