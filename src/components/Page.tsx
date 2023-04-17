import React, { useState } from 'react'
import UserService from '../services/UserService'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'

const Page: React.FC<{}> = (props) => {
    const currentUser = UserService.isAuthenticated() ? UserService.getCurrentUser() : {}
    const [user, setUser] = useState(currentUser)

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <Header user ={user} /> */}
            {/* <Sidebar /> */}
            <Toolbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}

export default Page
