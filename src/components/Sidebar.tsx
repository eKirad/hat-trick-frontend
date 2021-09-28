import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Sidebar: React.FC<{}> = (props) => (
    <Drawer
        variant="permanent"
        // sx={{
        //     width: drawerWidth,
        //     flexShrink: 0,
        //     [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        // }}
    >
        <Toolbar />
        <Box>
            <List>
                { 
                    ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )
                }
            </List>
        </Box>
    </Drawer>
);

export default Sidebar;