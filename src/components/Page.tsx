
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import UserService from '../services/UserService';
import Sidebar from './Sidebar';

const Page: React.FC<{}> = (props) => {
    const currentUser = UserService.isAuthenticated() ? UserService.getCurrentUser() : { };
    const [user, setUser] = useState(currentUser);

    return (
        <section>
            <Header
                user ={user}    
            />
                <Sidebar/>
                {props.children}
            <Footer/>
        </section>
    );
}

export default Page;