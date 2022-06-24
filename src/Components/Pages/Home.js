import React, { Component } from 'react';
import Header from "../components/Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function GetLinkedInData()
{
    console.log("Retrieving data...");
}

let res = "";

async function RetrieveData()
{
    const url = 'http://127.0.0.1:8000/'
    fetch(url).then( res = await res.json() );
    await console.log(res);
}

export default function Home() {
    return (
        <div>
            <Header></Header>
            <Grid sx={{width: 1/1}}>
                <Grid item sx={{width: 1/1}}>
                    <TextField sx={{width: 1/1}} id="filled-search" label="Search field" type="search" variant="filled"/>
                </Grid>
                <Grid item sx={{mt: 2, borderBottom: 1}}>
                    <Button sx={{ ml: 2, mb: 2}} variant="contained" onClick={ GetLinkedInData }>Load Jobs</Button>
                </Grid>
            </Grid>
        </div>
    );
}