import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function HomeHeader() {

    const navigate = useNavigate();

    return (
        <div>
            <AppBar style={{zIndex:1301}} position="relative" sx={{borderBottom: 1 }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
                        Application Cafe
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}