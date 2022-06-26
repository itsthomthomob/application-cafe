# Documentation
# Author: Thomas O'Brien
# Purpose: To allow users to search for job positions from all job posting platforms
# Modifications:
# 06 - 23: Initialization
# 06 - 25: Fixed CORS issue, body data was not constructed via JSON and stringify

# File reading and writing
import json
from pathlib import Path

# FastAPI imports
from fastapi import Body, FastAPI, Query
from pydantic import BaseModel
from fastapi import Request

# Middleware, FastAPI middleware does not handle CORS correctly
from starlette.middleware.cors import CORSMiddleware

# Initialize FastAPI application
app = FastAPI()

# Allowed origins for middleware
origins = ["http://localhost:3000", "http://localhost"]

# Implementing middleware
app.add_middleware(
   CORSMiddleware,
    allow_origins = origins,
    allow_credentials =True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)

# Read API creds
with open("creds.json") as file:
    data = json.load(file)
    print(data["API-Keys"])

# Class structure for job posting
class JobPosting():
  def __init__(self, jobName, jobDescription, company):
    self.jobName = jobName
    self.jobDescription = jobDescription
    self.company = company

# Class structure for query search
class QuerySearch(BaseModel):
    query: str

# Perform search query using LinkedIn's API
def performSearch(getQuery):
    print("Searching: " + getQuery)

# From Home.js:30
# Read incoming data from text field, return a list of jobs 
@app.post("/LinkedInJobs")
async def main(query: QuerySearch):
    print("Reading data...")
    performSearch(query.query)
    return query
