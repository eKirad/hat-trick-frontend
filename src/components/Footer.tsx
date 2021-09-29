import React from 'react';
import { Toolbar, Grid, AppBar } from '@mui/material';

const Footer: React.FC<{}> = () => (
    <div>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Grid container spacing={1}/>
            </Toolbar>
    </AppBar>
</div>
);

export default Footer;