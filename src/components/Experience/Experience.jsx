/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './experience.scss';
import bell from '../../assets/img/bell.png';
import shap from '../../assets/img/app_bg.png';
import zigzag from '../../assets/img/zigzag-three.png';
import dashboard from '../../assets/img/dash_board.png';
import mobile from '../../assets/img/mobile.png';

export default function Experience() {
    return (
        <section className="experience">
            <img src={bell} alt="Bell" className="bell" />
            <div className="container experience__area">
                <div className="experience__area-row">
                    <div className="img__row">
                        <div className="empty">
                            <div className="img__row-shap">
                                <img src={shap} alt="Shap" />
                            </div>
                            <img src={zigzag} alt="zigzag" className="zigzag" />
                            <img src={dashboard} alt="dashboard" className="dashboard" />
                            <img src={mobile} alt="mobile" className="mobile" />
                        </div>
                    </div>
                    <div className="text__row">
                        <div className="text__row-content">
                            <h2 className="title">
                                We deliver the <br /> better <span className="typo-underline">customer</span>{' '}
                                experiences .
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has.
                            </p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
