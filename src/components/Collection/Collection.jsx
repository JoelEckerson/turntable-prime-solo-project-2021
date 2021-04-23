import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';


function Collection() {

    const dispatch = useDispatch();
    const collection = useSelector( store => store.collection); 
    const user = useSelector((store) => store.user);

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
                {collection.map(record => {
                    return(
                        <div key={record.album_id} >
                            <h3>{record.artist}</h3>
                            <h4>{record.album}</h4>
                            <h4>{record.genre}</h4>
                            <h4>{record.year}</h4>
                            <img onClick={()=>clickRecord(record.album_id)} src={record.image_url} alt={record.album}/>
                        </div>
                    )
                })}
            

        </div>
    )
}

export default Collection
