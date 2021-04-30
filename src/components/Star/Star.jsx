import React, {useEffect, useState } from 'react';
import {FaStar} from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import './Star.css';
import { useDispatch} from 'react-redux';

const Star = (props) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const dispatch = useDispatch();

   useEffect(() => {
        console.log('Star component props: ', props);
        setRating(props.existingRating)
    }, []);

    const updateRating = (ratingValue) => {
        console.log('in updateRating', ratingValue);
        setRating(ratingValue);
        dispatch({ type: 'UPDATE_COLLECTION_RECORD_SAGA', payload: {rating: ratingValue, album_id: props.album_id, user_id: props.user_id} });
    }

    return (
        <div className="StarApp">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input className="StarInput"
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => updateRating(ratingValue)}
                        />
                        <FaStar
                            className="StarStar"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default Star