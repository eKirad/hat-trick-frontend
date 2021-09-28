import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

const Footer: React.FC<{}> = () => (
    <div>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
                <Grid container spacing={1}>

                </Grid>
            </Toolbar>
    </AppBar>
</div>
);

export default Footer;