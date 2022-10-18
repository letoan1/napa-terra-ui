import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './feature.scss';
import img_one from '~/assets/img/success_img.png';
import img_two from '~/assets/img/leaf_top.png';
import img_three from '~/assets/img/leaf_bottom.png';
import img_four from '~/assets/img/dot.png';
import flower from '~/assets/img/flower.png';
import flexible from '~/assets/img/flexible.png';
import union from '~/assets/img/Union.png';
import scalable from '~/assets/img/scalable.png';

import FeatureItem from './FeatureItem';

export default function Feature() {
    return (
        <section className="feature">
            <img src={img_one} alt="" className="img_one" />
            <img src={img_two} alt="" className="img_two" />
            <img src={img_three} alt="" className="img_three" />
            <img src={img_four} alt="" className="img_four" />
            <div className="container feature__area">
                <div className="feature__area-row">
                    <Box sx={{ margin: '0 24px' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={6}>
                                <div className="area__row-text">
                                    <h2>
                                        We offer the <span className="typo-underline">benefits</span> that are unique
                                        only to us
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text .
                                    </p>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <div className="area__row-layout">
                                    <div className="row-grid">
                                        <FeatureItem
                                            img={flower}
                                            title="Reliable"
                                            content="Lorem Ipsum is simply dummy text of the printing and typesetting."
                                        />
                                        <FeatureItem
                                            img={flexible}
                                            title="Flexible"
                                            content="Lorem Ipsum is simply dummy text of the printing and typesetting."
                                        />
                                        <FeatureItem
                                            img={union}
                                            title="Affordable"
                                            content="Lorem Ipsum is simply dummy text of the printing and typesetting."
                                        />
                                        <FeatureItem
                                            img={scalable}
                                            title="Scalable"
                                            content="Lorem Ipsum is simply dummy text of the printing and typesetting."
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </section>
    );
}
