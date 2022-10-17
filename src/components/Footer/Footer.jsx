/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsInstagram, BsDribbble, BsBehance } from 'react-icons/bs';
import { SlSocialSpotify } from 'react-icons/sl';

import './footer.scss';
import footer__img from '../../assets/img/logo_4.png';

export default function Footer() {
    return (
        <section className="footer">
            <div className="container footer__area">
                <div className="area__main-footer">
                    <div className="main__footer-row">
                        <div className="footer__row-item">
                            <div className="site-footer">
                                <img src={footer__img} alt="" />
                                <div className="content">
                                    <span>Call us</span>
                                    <ul>
                                        <li>
                                            <a href="#" className="number">
                                                925-465-3762
                                            </a>
                                        </li>
                                        <li>
                                            <p>2627 Park Street, San Francisco, CA</p>
                                        </li>
                                        <li>
                                            <a href="#">Support@droitlab.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer__row-item">
                            <div className="site-info">
                                <div className="content">
                                    <h5>About Us</h5>
                                    <ul>
                                        <li>
                                            <a href="#">About Agency</a>
                                        </li>
                                        <li>
                                            <a href="#">About Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Mission</a>
                                        </li>
                                        <li>
                                            <a href="#">Our History</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer__row-item">
                            <div className="site-info">
                                <div className="content">
                                    <h5>Workflow</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Classic Fullwidth</a>
                                        </li>
                                        <li>
                                            <a href="#">Classic Boxed</a>
                                        </li>
                                        <li>
                                            <a href="#">Creative Boxed</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer__row-item">
                            <div className="site-info">
                                <div className="content">
                                    <h5>Help & Support</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">Term & conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Reporting</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
