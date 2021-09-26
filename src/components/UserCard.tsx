import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

const UserCard: React.FC<{user: any}> = (props) => (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          {props.user.firstName}
        </Typography>
        <Typography variant="h5" component="div">
          {props.user.lastName}
        </Typography>
        <Typography>
        {props.user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
);

export default UserCard;