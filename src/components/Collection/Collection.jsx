import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    Typography, 
    AppBar, 
    Button,
    Card, CardActions, CardContent, CardMedia, 
    CssBaseline, 
    Grid, 
    Toolbar, 
    Container 
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from '../styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Collection() {

    const dispatch = useDispatch();
    const collection = useSelector( store => store.collection); 
    const user = useSelector((store) => store.user);
    const classes = useStyles();

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_COLLECTION_SAGA',
            payload: {
                userId: user.id.toString() }
    });
    }, []);

    const clickRecord = (id) =>{
        dispatch({ type: 'FETCH_RECORD', payload:id });
        console.log('in clickRecord', id );
        //history.push();
    }

    if (collection[0] === undefined) {
        return (
            <h1>Records on the way!</h1>
        )
    }


    return (
        <div>
                {/* {collection.map(record => {
                    return(
                        <div key={record.album_id} >
                            <h3>{record.artist}</h3>
                            <h4>{record.album}</h4>
                            <h4>{record.genre}</h4>
                            <h4>{record.year}</h4>
                            <img onClick={()=>clickRecord(record.album_id)} src={record.image_url} alt={record.album}/>
                        </div>
                    )
                })} */}
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {collection.map((record)=>(
                                <Grid item key={record.album_id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
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
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            ))}
                            
                        </Grid>
                    </Container>

        </div>
    )
}



export default Collection
