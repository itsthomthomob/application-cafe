from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Class structure for job posting
class JobPosting():
    def __init__(self, jobName, jobDescription, companyName):
        self.jobName = jobName
        self.jobDescription = jobDescription
        self.companyName = companyName

def CreateJobPosting(job):

    company = "Amazon"
    job = "Software Engineering Intern"
    description = "Internship at Amazon"

    job = JobPosting(job, description, company)
    
    return job

@app.post("/LinkedInJobs")
async def NewJob(job: JobPosting):
    
    return CreateJobPosting(job)
