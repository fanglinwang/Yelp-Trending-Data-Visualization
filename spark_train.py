import sys

import dash
import pandas as pd
import plotly.express as px
from dash import dcc, html
from dash.dependencies import Input, Output
from pyspark.ml import Pipeline
from pyspark.ml.evaluation import RegressionEvaluator
from pyspark.ml.feature import (SQLTransformer, StringIndexer, VectorAssembler,
                                VectorIndexer)
from pyspark.ml.regression import GBTRegressor
from pyspark.sql import SparkSession, functions, types

assert sys.version_info >= (3, 5)  # make sure we have Python 3.5+
import plotly.graph_objects as go
import requests
from chart_studio import plotly
from pyspark.sql import SQLContext

spark = SparkSession.builder.appName(
    'Weather and Temperature Ranges 1').getOrCreate()
# review = spark.read.json('/Users/wangfl/Downloads/yelp_dataset2/yelp_academic_dataset_business.json')  # df line=True
# print(review.count())
user = spark.read.json('/Users/wangfl/Downloads/final_project_cmpt732/yelp_dataset2/yelp_academic_dataset_user.json')
review = spark.read.option("header", "true").csv('/Users/wangfl/Downloads/final_project_cmpt732/data/yelp_bc_reviews.csv')

from pyspark.sql.functions import monotonically_increasing_id 

review = review.select("*").withColumn("id", monotonically_increasing_id())
review.select('id', 'review').repartition(1).write.option("index", "true").json("yelp_bc_reviews.json")
# user = user.select('average_stars', 'review_count', 'useful', 'user_id', 'yelping_since')
# print(user.count())
# print(review.columns)
# review.createOrReplaceTempView("review")
# user.createOrReplaceTempView("user")
# # user_in_vancouver = user.filter(user.user_id in review.user_id)
# user_in_vancouver= spark.sql("""SELECT compliment_cool, compliment_cute, compliment_funny, compliment_hot, compliment_list, compliment_more, compliment_note, compliment_photos, compliment_plain, compliment_profile, compliment_writer, user.cool cool, elite, fans, friends, user.funny funny, name, user.user_id user_id, average_stars, review_count, user.useful useful,yelping_since 
#                                  FROM user INNER JOIN review  
#                                  ON user.user_id = review.user_id;""")
# user_in_vancouver = user_in_vancouver.dropDuplicates()
# user_in_vancouver.repartition(1).write.option("header", "true").csv("yelp_bc_users.csv")




# business = pd.read_json('/Users/wangfl/Dow2nloads/yelp_dataset2/yelp_academic_dataset_business.json', lines=True, orient='columns')
# print(business.head())
# business = business[business['state'].isin(['BC'])]
# business['value'] = business.apply(lambda x: [x['longitude'], x['latitude'],x['stars']], axis=1)

# business[['name','value']].to_json('bclocation.json', orient='records')
# print(business[business['state'].isin(['BC'])][['latitude', 'longitude', 'stars']].to_csv('bclocation.csv',index=False))
# print(userDF.groupBy('City').count().repartition(1).collect())
# print(userDF.select('latitude', 'longitude', 'stars').collect())
# userDF.select('latitude', 'longitude', 'stars').collect().('business_loc.json')
# if __name__ == '__main__':
    # inputs = sys.argv[1]
    # output = sys.argv[2]
    # spark = SparkSession.builder.appName(
    #     'Weather and Temperature Ranges 1').getOrCreate()
    # assert spark.version >= '3.0'  # make sure we have Spark 3.0+
    # spark.sparkContext.setLogLevel('WARN')
    # sc = spark.sparkContext
    # main(inputs, output)


