/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './client-logo.scss';
import logo1 from '../../assets/img/1.png';
import logo2 from '../../assets/img/2.png';
import logo3 from '../../assets/img/3.png';
import logo5 from '../../assets/img/5.png';
import logo6 from '../../assets/img/6.png';
import star from '../../assets/img/star.png';

export default function ClientLogo() {
    return (
        <section className="client__logo">
            <div className="client__logo-container">
                <h2>
                    We take care of more than <b>100k</b> customers
                </h2>
                <img src={star} alt="Star" className="star" />
                <div className="clients__logo_info">
                    <a href="#" className="item">
                        <img src={logo1} alt="Logo client" />
                        <img src={logo1} alt="Logo client" />
                    </a>
                    <a href="#" className="item">
                        <img src={logo2} alt="Logo client" />
                        <img src={logo2} alt="Logo client" />
                    </a>
                    <a href="#" className="item">
                        <img src={logo3} alt="Logo client" />
                        <img src={logo3} alt="Logo client" />
                    </a>
                    <a href="#" className="item">
                        <img src={logo5} alt="Logo client" />
                        <img src={logo5} alt="Logo client" />
                    </a>
                    <a href="#" className="item">
                        <img src={logo6} alt="Logo client" />
                        <img src={logo6} alt="Logo client" />
                    </a>
                </div>
            </div>
        </section>
    );
}
