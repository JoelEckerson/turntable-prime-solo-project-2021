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
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

function Search() {
    const history = useHistory();
    const dispatch = useDispatch();
    const[name, setName] = useState('');
    const search = useSelector( store => store.search);
    const user = useSelector((store) => store.user); 
    const classes = useStyles();

    const searchInput = () =>{
        console.log('in searchInput', event.target.value);
        setName(event.target.value);
        dispatch({type: 'FETCH_SEARCH_SAGA', payload: event.target.value});
    }

    const searchRecords = (name) =>{
        dispatch({type: 'FETCH_SEARCH_SAGA', payload: name});
        setName('');
    }

    const clearSearch = () =>{
        setName('');
    }

    const typeRecord = (name) =>{
        console.log(name)
        // dispatch({type: 'FETCH_SEARCH_SAGA', payload: name});
    }

    const clickCollection = (record) =>{
        record.album_id = record.id;
        dispatch({ type: 'FETCH_RECORD', payload: record });
        console.log('in clickRecord', record);
        history.push('/record');
    }


    return (
        <div>
            {/* <input id="searchInput" type="text" placeholder="Search For"
                onChange={searchInput} value={name}/>
            <button onClick={()=>searchRecords(name)}>Search</button>   */}
            <form className={classes.form1} noValidate>
                <TextField
                    variant="outlined"
                    // inputProps={{min: 0, style: { textAlign: 'center'}}}
                    margin="normal"
                    required
                    size= 'medium'
                    fullWidth
                    id="search"
                    label="Search"
                    autoFocus
                    onChange={searchInput}
                    value={name}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" onClick={()=>searchRecords()}>
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment postition="end" onClick={()=>clearSearch()}>
                                <ClearOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
          </form>
            <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {search.map((record)=>(
                                <Grid item key={record.album_id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia onClick={event => {clickCollection(record)}} 
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
                                        <Button size="small" color="primary">Add Collection</Button>
                                        <Button size="small" color="primary">Add Wantlist</Button>
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
