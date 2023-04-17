import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'

const UserCard: React.FC<{ user: any }> = (props) => (
    <Card>
        <CardContent>
            <Typography gutterBottom>{props.user.firstName}</Typography>
            <Typography variant="h5" component="div">
                {props.user.lastName}
            </Typography>
            <Typography>{props.user.email}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
)

export default UserCard
