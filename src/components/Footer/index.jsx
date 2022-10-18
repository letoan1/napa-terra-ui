/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsInstagram, BsDribbble, BsBehance } from 'react-icons/bs';
import { SlSocialSpotify } from 'react-icons/sl';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './footer.scss';
import footer__img from '~/assets/img/logo_4.png';

const listLi = [
    {
        title: 'Call us',
        img: footer__img,
        list: ['925-465-3762', '2627 Park Street, San Francisco, CA', 'Support@droitlab.com'],
    },
    {
        title: 'About Us',
        list: ['About Agency', 'About Business', 'Our Mission', 'Our History'],
    },
    {
        title: 'Workflow',
        list: ['Contact Us', 'Classic Fullwidth', 'Classic Boxed', 'Creative Boxed'],
    },
    {
        title: 'Help & Support',
        list: ['Support', 'FAQ', 'Privacy', 'Term & conditions', 'Reporting'],
    },
];

export default function Footer() {
    return (
        <section className="footer">
            <div className="container footer__area">
                <div className="area__main-footer">
                    <Box>
                        <div className="main__footer-row">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {listLi.map((text, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <div className="footer__row-item">
                                            <div className="site-info">
                                                {text?.img && (
                                                    <img src={text.img} alt="" style={{ marginBottom: '45px' }} />
                                                )}
                                                <div className="content">
                                                    <h5>{text.title}</h5>
                                                    {text.list.map((sub, index) => (
                                                        <ul>
                                                            <li key={index}>
                                                                <a href="#">{sub}</a>
                                                            </li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Box>
                </div>
                <div className="area__footer-bottom">
                    <div className="footer__bottom-row">
                        <div className="row-reserved">
                            <p>© 2022 Terra. All Rights Reserved</p>
                        </div>
                        <div className="row-socials">
                            <div className="social-icons">
                                <a href="#">
                                    <BsInstagram />
                                </a>
                                <a href="#">
                                    <BsDribbble />
                                </a>
                                <a href="#">
                                    <BsBehance />
                                </a>
                                <a href="#">
                                    <SlSocialSpotify />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
