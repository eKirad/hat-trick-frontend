// React imports
import React from 'react';


// Component imports
import Header from './Header';
import Footer from './Footer';

interface IProps { }

const Page: React.FC<IProps> = (props) => {
    return(
        <section>
            <Header/>
            <Footer/>
        </section>
    );
}

export default Page;