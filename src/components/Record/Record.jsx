import React from 'react';
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
import { withRouter } from 'react-router-dom';



function Record(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const record = useSelector( store => store.record); 
    const user = useSelector((store) => store.user);
    const classes = useStyles();

    const clickPostCollection = (record) =>{
        record.user_id = user.id;
        dispatch({ type: 'SET_COLLECTION_RECORD_SAGA', payload: record });
        console.log('in clickPostCollection', record);
        // history.push('/record');
    }

    return (
        <div>
            {console.log(record)}
            <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                                <Grid item key={record.album_id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={record.image_url}
                                        
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            {record.artist}
                                        </Typography>
                                        <Typography>
                                            {record.album}
                                        </Typography>
                                        <Typography>
                                            {record.year}
                                        </Typography>
                                        <Typography>
                                            {record.genre}
                                        </Typography>
                                        <Typography>
                                            {record.ratin}
                                        </Typography>
                                        <Typography>
                                            {record.comments}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={event => {clickPostCollection(record)}} size="small" color="primary">Add Collection</Button>
                                        <Button size="small" color="primary">Add Wantlist</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
        </div>
    )
}

export default withRouter(Record);
