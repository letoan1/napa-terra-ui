/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './experience.scss';
import bell from '~/assets/img/bell.png';
import shap from '~/assets/img/app_bg.png';
import zigzag from '~/assets/img/zigzag-three.png';
import dashboard from '~/assets/img/dash_board.png';
import mobile from '~/assets/img/mobile.png';

export default function Experience() {
    return (
        <section className="experience">
            <img src={bell} alt="Bell" className="bell" />
            <Box>
                <div className="container experience__area">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <div className="experience__area-row">
                            <Grid item xs={12} md={8}>
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
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="text__row">
                                    <div className="text__row-content">
                                        <h2 className="title">
                                            We deliver the <br /> better{' '}
                                            <span className="typo-underline">customer</span> experiences .
                                        </h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has.
                                        </p>
                                        <a href="#">Learn more</a>
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </div>
            </Box>
        </section>
    );
}
