import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function Search() {

    const dispatch = useDispatch();
    const[name, setName] = useState('');
    const search = useSelector( store => store.search); 

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
            {search.length > 0 }
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
                    })}
            
        </div>
    )
}

export default Search;
