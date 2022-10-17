import React from 'react';
import Rating from '@mui/material/Rating';

import './rating-item.scss';

export default function RatingItem(props) {
    const { img, value, ratingNumber } = props;
    return (
        <div className="rating-item">
            <img src={img} alt="" />
            <div>
                <Rating name="read-only" value={value} precision={0.5} readOnly />
            </div>
            <p style={{ color: '#fff' }}>{ratingNumber}</p>
        </div>
    );
}
