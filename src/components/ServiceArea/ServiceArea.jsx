import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './service-area.scss';
import ServiceItem from './ServiceItem';
import shap from '~/assets/img/service_shap.png';
import shap2 from '~/assets/img/service_shap_two.png';
import shap3 from '~/assets/img/service_shap_three.png';
import shap4 from '~/assets/img/service_shap_four.png';
import mic from '~/assets/img/mic.png';
import cup from '~/assets/img/cup.png';

export default function ServiceArea() {
    return (
        <section className="service">
            <div className="container service__area">
                <h2 className="title-lg">
                    Singular <span className="typo">solution</span> to all
                    <br /> of your activities
                </h2>
                <p>You said I'd feel better if I just worked hard without lifting my head up</p>
                <img src={mic} alt="Mic" className="moving_one" />
                <img src={cup} alt="Cup" className="moving_two" />
                <Box >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <ServiceItem
                                image={shap}
                                title="CRM Software"
                                content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                                icon={'https://terra.droitlab.com/html/assets/img/link1.svg'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ServiceItem
                                image={shap2}
                                title="Marketing Automation"
                                content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                                icon={'https://terra.droitlab.com/html/assets/img/setting.svg'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ServiceItem
                                image={shap3}
                                title="Helpdesk Software"
                                content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                                icon={'https://terra.droitlab.com/html/assets/img/chat.svg'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ServiceItem
                                image={shap4}
                                title="Sales Software"
                                content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                                icon={'https://terra.droitlab.com/html/assets/img/software.svg'}
                            />
                        </Grid>
                    </Grid>
                    {/* <div className="service__area-row">
                    <ServiceItem
                        image={shap}
                        title="CRM Software"
                        content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                        icon={'https://terra.droitlab.com/html/assets/img/link1.svg'}
                    />
                    <ServiceItem
                        image={shap2}
                        title="Marketing Automation"
                        content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                        icon={'https://terra.droitlab.com/html/assets/img/setting.svg'}
                    />
                    <ServiceItem
                        image={shap3}
                        title="Helpdesk Software"
                        content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                        icon={'https://terra.droitlab.com/html/assets/img/chat.svg'}
                    />
                    <ServiceItem
                        image={shap4}
                        title="Sales Software"
                        content="Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps ."
                        icon={'https://terra.droitlab.com/html/assets/img/software.svg'}
                    />
                </div> */}
                </Box>
            </div>
        </section>
    );
}
