import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './marketing-area.scss';
import BasicButtons from '../Button/Button';
import dashboard from '../../assets/img/dashbord_img.png';
import card from '../../assets/img/card.png';
import card2 from '../../assets/img/card-2.png';

export default function MarketingArea() {
    return (
        <section className="marketing">
            <div className="container marketing__area">
                <h2>
                    Transform the way you think about <span className="typo">marketing</span>
                </h2>
                <p>You said I'd feel better if I just worked hard without lifting my head up</p>

                <div className="button-marketing">
                    <BasicButtons variant="contained " icon={<ArrowDownwardIcon />} titleButton="Try fo free" />
                    <BasicButtons variant="text" icon={<PlayArrowIcon />} titleButton="Watch video" />
                </div>

                <div className="marketing__area-img">
                    <ul>
                        <li>
                            <img src={dashboard} alt="Dash board" />
                        </li>
                        <li>
                            <img src={card} alt="Card" />
                        </li>
                        <li>
                            <img src={card2} alt="Card " />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
