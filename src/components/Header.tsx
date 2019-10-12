// React imports
import React, { useState } from 'react';
// import styles

// Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Component imports

// Service imports

interface IProps {

};

interface IState {

}

const Header: React.FC<IProps> = (props) => {
    return(
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
}

export default Header;