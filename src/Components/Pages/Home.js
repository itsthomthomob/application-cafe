import React, { Component } from 'react';
import Header from "../components/Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Home() {
    const [curSearch, setSearch] = React.useState(String);

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
        response.then( res = await res.json() );
        console.log(res);
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
        </div>
    );
}