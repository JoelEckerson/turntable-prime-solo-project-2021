import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';


function Collection() {

    const dispatch = useDispatch();
    const collection = useSelector( store => store.collection)

    useEffect(() => {
        dispatch({ type: 'FETCH_COLLECTION_SAGA'});
    }, []);

    return (
        <div>
            

        </div>
    )
}

export default Collection
