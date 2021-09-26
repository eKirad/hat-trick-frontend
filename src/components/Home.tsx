import React, { useEffect } from 'react';
import UserService from '../services/user.service';
import Page from './Page';

const Home: React.FC<{}> = () => {

    useEffect(() => {
        const fetchUsers = async () => {
            console.log(`Calling user`)
            await UserService.fetchUsers();
        }

        fetchUsers();
    }, [])

    return <Page>{/* TODO: Main conent */}</Page>
}

export default Home;

