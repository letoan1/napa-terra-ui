/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './feature-item.scss';

export default function FeatureItem(props) {
    const { img, title, content } = props;
    return (
        <div className="feature-item">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{content}</p>
            <a href="#">
                <ArrowForwardIcon />
            </a>
        </div>
    );
}
