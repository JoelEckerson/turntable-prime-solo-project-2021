import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { 
    Typography, 
    AppBar, 
    Button,
    Card, CardActions, CardContent, CardMedia, 
    CssBaseline, 
    Grid, 
    Toolbar, 
    Container, 
    ButtonBase
} from '@material-ui/core';
import useStyles from '../styles';
import {useHistory} from 'react-router-dom';




function Friends(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const friends = useSelector((store) => store.friends);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_COLLECTION_SAGA'});
    }, []);

    const clickFriendCollection = (friend) =>{
        dispatch({ type: 'FETCH_FRIEND', payload: friend });
        console.log('in clickFriendCollection', friend);
        history.push('/friendcollection');
    }

    const clickFriendWantlist = (friend) =>{
        dispatch({ type: 'FETCH_FRIEND', payload: friend });
        console.log('in clickFriendWantlist', friend);
        history.push('/friendwantlist');
    }

    if (friends[0] === undefined) {
        return (
            <h1>Friends on the way!</h1>
        )
    }

  return (
    
      <div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {friends.map((friend)=>(
                                <Grid item key={friend.id} xs={12} sm={6} md={4}>
                                <Card className={classes.cardFriends}>
                                    <CardMedia  
                                        className={classes.cardMedia}
                                        image={'images/friend.png'}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            {friend.username}
                                        </Typography>
                                        <Typography>
                                            {friend.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={event => {clickFriendCollection(friend)}} size="small" color="primary">View Collection</Button>
                                        <Button onClick={event => {clickFriendWantlist(friend)}} size="small" color="primary">View Wantlist</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>

        </div>
    
  );
}

export default Friends;
