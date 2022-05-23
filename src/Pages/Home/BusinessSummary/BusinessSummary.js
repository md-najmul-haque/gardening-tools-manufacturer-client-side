import { faArrowTrendUp, faGlobe, faPaperPlane, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BusinessSummary.css'

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-2xl uppercase text-primary font-bold text-center'>Millions of Client Trust us</h1>
            {/* <p className='text-center'>Customer satisfaction is our happiness</p> */}
            <div className='flex justify-center'>
                <div class="section-underline"></div>
            </div>
            <div class="stats shadow flex justify-around">
                <div class="stat">
                    <FontAwesomeIcon className='stat-value text-secondary' icon={faGlobe} />
                    <div class="stat-value text-secondary">132</div>
                    <div class="stat-title">Countries</div>
                </div>

                <div class="stat">

                    <FontAwesomeIcon className='stat-value text-secondary' icon={faPaperPlane} />

                    <div class="stat-value text-secondary">3.6M+</div>
                    <div class="stat-title">Complete Projects</div>

                </div>

                <div class="stat">

                    <FontAwesomeIcon className='stat-value text-secondary' icon={faUsers} />
                    <div class="stat-value text-secondary">2.5K+</div>
                    <div class="stat-title">Happy Clients</div>
                </div>

                <div class="stat">
                    <div class="stat-value  text-secondary">86%</div>
                    <div class="stat-title">Tasks done</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;