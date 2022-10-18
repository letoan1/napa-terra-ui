/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './update-area.scss';
import zigzag_two from '~/assets/img/zigzag_two.png';

export default function UpdateArea() {
    return (
        <section className="update">
            <div className="update__shap">
                <img src={zigzag_two} alt="" className="layer" />
            </div>
            <div className="container update__area">
                <h2 className="title-lg">Never miss an update</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed <br />
                    do eiusmod tempor incididunt ut labore.
                </p>
                <a href="#" className="theme-btn">
                    Work with Us
                    <span>
                        <ArrowForwardIcon />
                    </span>
                </a>
            </div>
        </section>
    );
}
