import { faArrowTrendUp, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div class="stats shadow flex justify-around">
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <FontAwesomeIcon className='stat-value text-secondary' icon={faArrowTrendUp} />
                </div>
                <FontAwesomeIcon className='stat-value text-secondary' icon={faGlobe} />
                <div class="stat-value text-secondary">132</div>
                <div class="stat-title">Countries</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <FontAwesomeIcon className='stat-value text-secondary' icon={faPaperPlane} />
                </div>
                <div class="stat-value text-secondary">3.6M+</div>
                <div class="stat-title">Complete Projects</div>

            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>

                <div class="stat-value text-secondary">2.5K+</div>
                <div class="stat-title">Happy Clients</div>
            </div>

            <div class="stat">
                <div class="stat-value  text-secondary">86%</div>
                <div class="stat-title">Tasks done</div>
            </div>

        </div>
    );
};

export default BusinessSummary;