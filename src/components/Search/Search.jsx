import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
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

function Search() {

    const dispatch = useDispatch();
    const[name, setName] = useState('');
    const search = useSelector( store => store.search); 
    const classes = useStyles();

    const searchInput = () =>{
        console.log('in searchInput', event.target.value);
        setName(event.target.value);
    }

    const searchRecords = (name) =>{
        dispatch({type: 'FETCH_SEARCH_SAGA', payload: name});
        setName('');
    }




    return (
        <div>
            <input id="searchInput" type="text" placeholder="Search For"
                onChange={searchInput} value={name}/>
            <button onClick={()=>searchRecords(name)}>Search</button>  
            {/* {search.length > 0 }
                {search.map(record => {
                    return(
                        <div key={record.id} >
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
                            {search.map((record)=>(
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

export default Search;
