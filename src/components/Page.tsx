// React imports
import React, { useState } from 'react';


// Component imports
import Header from './Header';
import Footer from './Footer';

// Service imports
import UserService from '../services/UserService';

interface IProps {

};

const Page: React.FC<IProps> = (props) => {
    const currentUser = UserService.isAuthenticated() ? UserService.getCurrentUser() : { };
    const [user, setUser] = useState(currentUser);

    return(
        <section>
            <Header
                user ={user}    
            />
                {props.children}
            <Footer/>
        </section>
    );
}

export default Page;