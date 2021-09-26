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

    return (
        <Page>
            { users && users.map((user: any) => (<UserCard user={user}/>))}
        </Page>
    )
}

export default Home;

