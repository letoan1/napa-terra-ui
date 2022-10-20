import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './testimonial.scss';
import testiImg from '~/assets/img/testimonial_img.png';
import qoute from '~/assets/img/chat.png';
import one from '~/assets/img/img_one.png';
import two from '~/assets/img/img_two.png';
import capterra from '~/assets/img/capterra.png';
import trustpilot from '~/assets/img/trustpilot.png';
import getapp from '~/assets/img/getapp.png';
import clutch from '~/assets/img/clutch.png';
import star from '~/assets/img/star.png';
import plus from '~/assets/img/plus.png';
import line_angle from '~/assets/img/line_angle.png';
import round from '~/assets/img/round.png';
import zigzac from '~/assets/img/zigzag.png';

import RatingItem from './RatingItem';

const dataTestimonial = [
    {
        name: 'Jonah Jameson',
        position: 'CEO of youngtech',
        comment:
            '"Connect to a multitude of sources like files and feeds, popular business apps, cloud and onpremise databases, custom apps and more"',
    },
    {
        name: 'Jonah Jameson',
        position: 'CEO of youngtech',
        comment:
            '"Connect to a multitude of sources like files and feeds, popular business apps, cloud and onpremise databases, custom apps and more"',
    },
    {
        name: 'Jonah Jameson',
        position: 'CEO of youngtech',
        comment:
            '"Connect to a multitude of sources like files and feeds, popular business apps, cloud and onpremise databases, custom apps and more"',
    },
];

export default function Testimonial() {
    return (
        <section className="testimonial">
            <ul className="shap">
                <li>
                    <img src={plus} alt="plus" />
                </li>
                <li>
                    <img src={star} alt="star" />
                </li>
                <li>
                    <img src={line_angle} alt="line_angle" />
                </li>
                <li>
                    <img src={round} alt="round" />
                </li>
                <li>
                    <img src={zigzac} alt="zigzac" />
                </li>
            </ul>
            <div className="container testimonial__area">
                <Box sx={{ margin: '0 24px' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={7}>
                            <div className="testimonial__area-text">
                                <h2>
                                    Happy customer <br /> <span>testimonials</span>
                                </h2>
                                <div className="testimonial__swiper">
                                    <Swiper
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                        style={{
                                            marginBottom: 60,
                                            fontSize: 24,
                                        }}
                                    >
                                        {dataTestimonial?.map((data) => (
                                            <SwiperSlide>
                                                <div className="testimonial__swiper-preview">
                                                    <p>{data?.comment}</p>
                                                    <div className="author">
                                                        {data?.name}, <span>{data?.position}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <div className="testimonial__area-image">
                                <div className="testimonial__area-shape">
                                    <img src={qoute} alt="Qoute" className="qoute" />
                                    <img src={one} alt="Qoute" className="one" />
                                    <img src={two} alt="Qoute" className="two" />
                                    <img src={testiImg} alt="Testimonial" className="testi-img" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="ratting">
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div className="ratting__content">
                        <h5>
                            <strong>4.8</strong> out of <strong>5</strong> star based <br /> on 1200 reviews
                        </h5>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ flexGrow: '1' }}>
                    <div className="ratting__info">
                        <RatingItem img={capterra} value={5} ratingNumber="4.9/5" sx={{ fontSize: '1.15rem' }} />
                        <RatingItem img={trustpilot} value={5} ratingNumber="5/5" sx={{ fontSize: '1.15rem' }} />
                        <RatingItem img={getapp} value={5} ratingNumber="4.9/5" sx={{ fontSize: '1.15rem' }} />
                        <RatingItem img={clutch} value={5} ratingNumber="5/5" sx={{ fontSize: '1.15rem' }} />
                    </div>
                </Grid>
            </div>
        </section>
    );
}
