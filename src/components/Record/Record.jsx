import React, {useEffect, useState} from 'react';
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
import Star from '../Star/Star';



function Record(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const record = useSelector( store => store.record); 
    const user = useSelector((store) => store.user);
    const classes = useStyles();
    const collection = useSelector( store => store.collection); 
    const wantlist = useSelector( store => store.wantlist);

    const [foundRecordInCollection, setFoundRecordInCollection] = useState(false);
   const [foundRecordInWantlist, setFoundRecordInWantlist] = useState(false);

   useEffect(() => {
        console.log('Record component props: ', props);
        // dispatch({ type: 'FETCH_COLLECTION_SAGA', payload: {userId: user.id.toString()}});
        // dispatch({ type: 'FETCH_WANTLIST_SAGA', payload: {userId: user.id.toString()}});
        recordInCollection();
        recordInWantlist();
    }, []);


    const clickPostCollection = (record) =>{
        record.user_id = user.id;
        dispatch({ type: 'SET_COLLECTION_RECORD_SAGA', payload: record });
        console.log('in clickPostCollection', record);
        // history.push('/record');
    }

    const clickPostWantlist = (record) =>{
        record.user_id = user.id;
        dispatch({ type: 'SET_WANTLIST_RECORD_SAGA', payload: record });
        console.log('in clickPostWantlist', record);
        // history.push('/record');
    }

    const clickDeleteCollection = () =>{
        record.user_id = user.id;
        dispatch({ type: 'DELETE_COLLECTION_RECORD_SAGA', payload: record });
        console.log('in clickDeleteCollection', record);
   }

    const clickDeleteWantlist = () =>{
        record.user_id = user.id;
        dispatch({ type: 'DELETE_WANTLIST_RECORD_SAGA', payload: record });
        console.log('in clickDeleteWantlist', record);
    }

  const recordInCollection = () => {
        console.log('in recordInCollection', record);
        console.log('in recordInCollection collection', collection);
        collection.map((asdf)=>{
         console.log('in recordInCollection map', asdf.album_id);
       if (record.album_id === asdf.album_id){
                setFoundRecordInCollection(true);
                console.log('in recordInCollection found match ', record.album_id);}
      })
          console.log('in recordInCollection foundRecordInCollection', foundRecordInCollection);  
     }

    const recordInWantlist = () => {
        console.log('in recordInWantlist', record);
        console.log('in recordInWantlist wantlist', wantlist);
        wantlist.map((asdf)=>{
         console.log('in recordInWantlist map', asdf.album_id);
       if (record.album_id === asdf.album_id){
                setFoundRecordInWantlist(true);
                console.log('in recordInWantlist found match ', record.album_id);}
      })
          console.log('in recordInWantlist foundRecordInWantlist', foundRecordInWantlist);  
     }

    // const switchCollectionButtons = () => {
    //     let foundRecord = false;
    //     console.log('in switchCollectionButtons', record);
    //     collection.map((asdf)=>{
    //     if (record.album_id === asdf.album_id)
    //             foundRecord = true;
    //             console.log('in switchCollectionButtons found match ', record.album_id);
    //   })
    //     if (foundRecord == true){
    //         return <Button onClick={event => {clickDeleteCollection(record)}} size="small" color="primary">Delete from Collection</Button>
    //     }else{
    //         return <Button onClick={event => {clickPostCollection(record)}} size="small" color="primary">Add to Collection</Button>
    //     }
    // }

    // const switchWantlistButtons = () => {
    //     let foundRecord = false
    //     console.log('in switchWantlistButtons', record)
    //     wantlist.map((asdf)=>{
    //     if (record.album_id === asdf.album_id)
    //             foundRecord = true;
    //             console.log('in switchWantlistButtons found match ', record.album_id, 'asdf = ', asdf.album)
    //    })
    //     if (foundRecord == true){
    //         return <Button onClick={event => {clickDeleteWantlist(record)}} size="small" color="primary">Delete from Wantlist</Button>
    //     }else{
    //         return <Button onClick={event => {clickPostWantlist(record)}} size="small" color="primary">Add to Wantlist</Button>
    //     }
    // }

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
                                        <Star />
                                        <Typography>
                                            {record.rating}
                                        </Typography>
                                        <Typography>
                                            {record.comments}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                         {/*(props.parent === 'COLLECTION' || props.parent === 'SEARCH') && */foundRecordInCollection == true &&
                                            <Button onClick={event => {clickDeleteCollection(record)}} size="small" color="primary">Delete from Collection</Button>}
                                        {/*(props.parent === 'COLLECTION' || props.parent === 'SEARCH') && */foundRecordInCollection == false &&
                                            <Button onClick={event => {clickPostCollection(record)}} size="small" color="primary">Add to Collection</Button>}
                                        {/*(props.parent === 'WANTLIST' || props.parent === 'SEARCH') && */foundRecordInWantlist == true &&
                                            <Button onClick={event => {clickDeleteWantlist(record)}} size="small" color="primary">Delete from Wantlist</Button>}
                                        {/*(props.parent === 'WANTLIST' || props.parent === 'SEARCH') && */foundRecordInWantlist == false &&
                                            <Button onClick={event => {clickPostWantlist(record)}} size="small" color="primary">Add to Wantlist</Button>}

                                        {/* {switchCollectionButtons()} */}
                                        {/* {switchWantlistButtons()} */}
                                        {/* <Button onClick={event => {clickPostWantlist(record)}} size="small" color="primary">Add Wantlist</Button> */}
                                        {/* <Button onClick={event => {clickDelete(record)}} size="small" color="primary"> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
        </div>
    )
}

export default withRouter(Record);
