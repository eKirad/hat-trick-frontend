
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import UserService from '../services/UserService';
import Sidebar from './Sidebar';
import { Box, Grid, Toolbar } from '@mui/material';

const Page: React.FC<{}> = (props) => {
    const currentUser = UserService.isAuthenticated() ? UserService.getCurrentUser() : { };
    const [user, setUser] = useState(currentUser);

    return (
        <Box sx={{ display: 'flex' }}>
            <Header user ={user} />
                <Sidebar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                    {props.children}
                </Box>
            <Footer/>
        </Box>
    );
}

export default Page;