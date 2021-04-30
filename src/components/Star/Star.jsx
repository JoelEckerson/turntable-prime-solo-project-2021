import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import './Star.css';

const Star = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


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
                            onClick={() => setRating(ratingValue)}
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