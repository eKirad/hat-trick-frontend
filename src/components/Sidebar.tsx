import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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