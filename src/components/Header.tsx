import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

interface IHeader {
    user: any
}

const Header: React.FC<IHeader> = (props) => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={1}>
                    <Grid item xs={2} sm={2}>
                        Logo comes here
                    </Grid>
                    <Grid item xs={8} sm={2}>
                       Search comes here
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        User type comes here
                    </Grid>
                </Grid>
                <Button>Signup</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;