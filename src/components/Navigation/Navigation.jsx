/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import BasicButtons from '../Button/Button';
import './navigation.scss';

export default function Navigation() {
    const [nav, setNav] = React.useState(false);
    const [isShowNav, setIsShowNav] = React.useState(false);
    const menuRef = React.useRef(null);

    const handleShowNav = () => {
        setIsShowNav(!isShowNav);
        menuRef.current.classList.toggle('toggle');
    };

    React.useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div className={nav ? 'nav__top active' : 'nav__top'}>
            {nav ? (
                <img src="https://terra.droitlab.com/html/assets/img/logos/sticky_dark_logo.png" alt="logo dark" />
            ) : (
                <img src="https://terra.droitlab.com/html/assets/img/logos/logo_4.png" alt="logo" />
            )}

            <div className="nav__top-center">
                {!isShowNav && (
                    <ul>
                        <li>
                            <a href="#">Home</a>
                            <span className="nav__top-center-icon">
                                <KeyboardArrowDownIcon />
                            </span>
                            <div className="home__sub">
                                <ul>
                                    <li>
                                        <a href="#">Marketing Software</a>
                                    </li>
                                    <li>
                                        <a href="#">Help Desk</a>
                                    </li>
                                    <li>
                                        <a href="#">Finance and Analytics Software</a>
                                    </li>
                                    <li>
                                        <a href="#">Payment Gateway (LIGHT)</a>
                                    </li>
                                    <li>
                                        <a href="#">Hosting (LIGHT)</a>
                                    </li>
                                    <li>
                                        <a href="#">Digital Marketing (LIGHT)</a>
                                    </li>
                                    <li>
                                        <a href="#">Saas (LIGHT)</a>
                                    </li>
                                    <li>
                                        <a href="#">Cloud Hosting</a>
                                    </li>
                                    <li>
                                        <a href="#">Payment Gateway (DARK)</a>
                                    </li>
                                    <li>
                                        <a href="#">Hosting (DARK)</a>
                                    </li>
                                    <li>
                                        <a href="#">Digital Marketing (DARK)</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                            <span className="nav__top-center-icon">
                                <KeyboardArrowDownIcon />
                            </span>
                            <div className="pages__sub">
                                <div className="pages__sub-row">
                                    <div className="row__essential">
                                        <h4>Essential Pages</h4>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">About Business</a>
                                            </li>
                                            <li>
                                                <a href="#">Team</a>
                                            </li>
                                            <li>
                                                <a href="#">Team Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row__features">
                                        <h4>Features Pages</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Service</a>
                                            </li>
                                            <li>
                                                <a href="#">Service Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row__other">
                                        <h4>Other Pages</h4>
                                        <ul>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">404</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                            <span className="nav__top-center-icon">
                                <KeyboardArrowDownIcon />
                            </span>
                            <div className="portfolio__sub">
                                <ul>
                                    <li className="portfolio__sub-item">
                                        <a href="#">
                                            <span>
                                                <ErrorOutlineOutlinedIcon color="warning" />
                                            </span>
                                            Portfolio Two Column
                                        </a>
                                    </li>
                                    <li className="portfolio__sub-item">
                                        <a href="#">
                                            <span>
                                                <AccountCircleOutlinedIcon color="primary" />
                                            </span>
                                            Portfolio Three Column
                                        </a>
                                    </li>
                                    <li className="portfolio__sub-item">
                                        <a href="#">
                                            <span>
                                                <LayersOutlinedIcon color="warning" />
                                            </span>
                                            Portfolio Masonry
                                        </a>
                                    </li>
                                    <li className="portfolio__sub-item">
                                        <a href="#">
                                            <span>
                                                <VolumeUpOutlinedIcon color="info" />
                                            </span>
                                            Portfolio Details
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                            <span className="nav__top-center-icon">
                                <KeyboardArrowDownIcon />
                            </span>
                            <div className="blog__sub">
                                <ul>
                                    <li>
                                        <a href="#">Blog List</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog Details</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                )}
                <div ref={menuRef} className="icon__close" onClick={handleShowNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <span className="nav__top-button">
                <BasicButtons nav={nav} variant={'text mobile'} titleButton={'Login'} />
                <BasicButtons nav={nav} variant={'outline'} titleButton={'Sign up'} />
            </span>
        </div>
    );
}
