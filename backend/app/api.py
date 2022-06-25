from fastapi import Body, FastAPI, Query
#from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi import Request

from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000", "http://localhost"]

app.add_middleware(
   CORSMiddleware,
    allow_origins = origins,
    allow_credentials =True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)

# Class structure for job posting
class JobPosting():
  def __init__(self, jobName, jobDescription, company):
    self.jobName = jobName
    self.jobDescription = jobDescription
    self.company = company

class QuerySearch(BaseModel):
    query: str

url = 'http://localhost:8000/'

def performSearch(getQuery):
    print(getQuery)

@app.post("/LinkedInJobs")
def main(request: Request):
    # performSearch(query)
    # newJob = JobPosting("Software Engineering Intern", "Front-end engineering", "Amazon")
    # payload = {"job": newJob.jobName, "company": newJob.company, "description": newJob.jobDescription}
    # response = requests.post(url, payload)
    print(request)
    return request
