import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserService from '../services/user.service';
import Page from './Page';
import UserCard from './UserCard';

const Home: React.FC<{}> = () => {
    const [users, setUsers] = useState<any>();


    useEffect(() => {
        const fetchUsers = async () => {
            console.log(`Calling user`)
            const users = await UserService.fetchUsers();
            setUsers(users);
        }

        fetchUsers();
    }, [])

// <UserCard user={user}/>

    const getUserCards = (users: any[]) => (
        users.map((user: any) => (
                <Grid item  xs={3}>
                    <UserCard user={user}/>
                </Grid>
        ))
    )


    return (
        <Page>
            <Box sx={{ flexGrow: 1 }}>
                {
                    users && ( <Grid container spacing={2}> {getUserCards(users)} </Grid>)
                }
            </Box>
        </Page>
    )
}

export default Home;

