import React from 'react';

// Component imports
import Page from './Page';

interface IProps {

}

const Home: React.FC<IProps> = (props) => {

    return(
        <Page>
            <p>Main content</p>
        </Page>
    );
}

export default Home;

