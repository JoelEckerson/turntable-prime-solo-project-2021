import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function Search() {

    const dispatch = useDispatch();
    const[name, setName] = useState('');

    const collectionInput = () =>{
        console.log('in collectionInput', event.target.value);
        setName(event.target.value);
    }

    const searchRecords = (name) =>{
        dispatch({type: 'SEARCH_RECORD_SAGA', payload: name});
        setName('');
    }


    return (
        <div>
            <input id="collectionInput" type="text" placeholder="Search For"
                onChange={collectionInput} value={name}/>
            <button onClick={()=>searchRecords(name)}>Search</button>
            button
        </div>
    )
}

export default Search
