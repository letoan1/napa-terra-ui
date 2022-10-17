import React from 'react';

import './funfact-area.scss';

export default function FunfactArea() {
    return (
        <section className="funfact">
            <div className="container funfact__area">
                <div className="funfact__area-flex">
                    <div className="area__flex-item">
                        <h2>650k</h2>
                        <p>Active app Installation</p>
                    </div>
                    <div className="area__flex-item">
                        <h2>99%</h2>
                        <p>Satisfied customer percentage</p>
                    </div>
                    <div className="area__flex-item">
                        <h2>65+</h2>
                        <p>Countries avialable</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
