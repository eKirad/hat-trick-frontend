// React imports
import React from 'react';

// Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



interface IProps { 

};

const Footer: React.FC<IProps> = (props) => {
    return(
        <Toolbar>
            <p>Footer</p>
        </Toolbar>
    );
};

export default Footer;