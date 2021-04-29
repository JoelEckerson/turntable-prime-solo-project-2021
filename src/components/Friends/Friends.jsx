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




function Friends(props) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const friends = useSelector((store) => store.friends);

    useEffect(() => {
        dispatch({ type: 'FETCH_COLLECTION_SAGA'});
    }, []);

//     const clickCollection = (record) =>{
//         dispatch({ type: 'FETCH_RECORD', payload: record });
//         console.log('in clickRecord', record);
//          history.push({
//             pathname: '/record',
//             state: {parent: 'COLLECTION'}
//             });
//    }

    // onClick={event => {clickCollection(record)}}

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
                                        image={friend.image_url}
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
                                        <Button size="small" color="primary">View Collection</Button>
                                        <Button size="small" color="primary">View Wantlist</Button>
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
