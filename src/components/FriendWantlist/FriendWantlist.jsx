import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
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
import { PhotoCamera } from '@material-ui/icons';
import useStyles from '../styles';


function FriendWantlist() {
    const history = useHistory();
    const dispatch = useDispatch();
    const wantlist = useSelector( store => store.wantlist); 
    const friend = useSelector((store) => store.friend);
    const classes = useStyles();

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_WANTLIST_SAGA',
            payload: {
                userId: friend.id.toString() }
    });
    }, []);


    if (wantlist[0] === undefined) {
        return (
            <h1>Records on the way!</h1>
        )
    }


    return (
        <div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {wantlist.map((record)=>(
                                <Grid item key={record.album_id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia /*onClick={event => {clickCollection(record)}} */
                                        className={classes.cardMedia}
                                        image={record.image_url}
                                        title={record.artist}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            {record.artist}
                                        </Typography>
                                        <Typography>
                                            {record.album}
                                            in friend wantlist
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small" color="primary">Add Collection</Button>
                                        <Button size="small" color="primary">Add Wantlist</Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>

        </div>
    )
}



export default FriendWantlist