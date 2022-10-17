/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './service-item.scss';

export default function ServiceItem(props) {
    const { image, title, content, icon } = props;
    return (
        <div className="service-item">
            <img src={image} alt="" />
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
            <a href="#">Read more</a>
        </div>
    );
}
