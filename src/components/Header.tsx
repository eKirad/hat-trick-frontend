import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface IHeader {
    user: any
}

const Header: React.FC<IHeader> = () => (
    <div>
        <AppBar position="fixed">
            <Toolbar>
                <Grid container spacing={1}>
                    <Grid item xs={2} sm={2}>
                        {/* TODO: Add logo */}
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        {/* TODO: Add search */}
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        {/* TODO: Add user type */}
                    </Grid>
                </Grid>
                <Button>Signup</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;