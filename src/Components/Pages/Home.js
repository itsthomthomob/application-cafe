import React, { Component } from 'react';
import Header from "../components/Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Home() {
    const [curSearch, setSearch] = React.useState(String);

    let JobList = [];

    function setQuerySearch(e)
    {
        setSearch(e.target.value);
    }

    function GetLinkedInData()
    {
        console.log("Retrieving data...");
    }

    let res = "";

    async function RetrieveData()
    {
        let data = curSearch.toString();

        console.log(`Sending: ${curSearch}`);

        const url = 'http://localhost:8000/LinkedInJobs'
        const response = await fetch(url, 
            { 
                method: "POST", 
                headers: { "Content-type": "application/json"},
                body: JSON.stringify({ query: curSearch })
            }
        );
        console.log(response);
        if(response.status === 200)
        {
            console.log("Retrieved data.");
        }
        else 
        {
            console.log("Backend error.");
        }
    }

    function PopulateJobs()
    {

    }
    
    function CreateJobPosting()
    {
        const JobPost = (
        <Box sx={{mt: 2}}>
            <Card>
                <CardContent>
                    <Typography variant="h1">Job Name</Typography>
                    <Typography variant="h2">Company</Typography>
                    <Typography variant="p">Job Description</Typography>
                </CardContent>
            </Card>
        </Box>
        )
        return JobPost
    }

    function LoadAppliedJobs()
    {

    }

    function LoadSavedJobs() 
    {
        
    }

    return (
        <div>
            <Header></Header>
            <Grid sx={{width: 1/1}}>
                <Grid item sx={{width: 1/1}}>
                    <TextField onChange={setQuerySearch} sx={{width: 1/1}} id="filled-search" label="Search field" type="search" variant="filled"/>
                </Grid>
                <Grid item sx={{mt: 2, borderBottom: 1}}>
                    <Button sx={{ ml: 2, mb: 2}} variant="contained" onClick={ RetrieveData }>Load Jobs</Button>
                </Grid>
            </Grid>
            <Box sx={{m: 2}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Typography variant="h2" color="secondary">Unorganized</Typography>
                        <div>
                        { CreateJobPosting() }
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h2" color="secondary">Applied</Typography>
                        <div>
                        { LoadAppliedJobs() }
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h2" color="secondary">Saved</Typography>
                        <div>
                        { LoadSavedJobs() }
                        </div>
                    </Grid>
                </Grid>

            </Box>
        </div>
    );
}