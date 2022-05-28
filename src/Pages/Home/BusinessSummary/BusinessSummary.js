import { faCalendarDays, faList, faTruckFast, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BusinessSummary.css'

const BusinessSummary = () => {
    return (

        <div className='bg-red-500 business-summary-section min-h-fit py-10'>
            <h1 className='text-2xl lg:text-5xl uppercase mb-3 text-white font-bold text-center'>Millions of Client Trust us</h1>
            <p className='text-center text-xl lg:text-3xl mb-10 lg:mb-24 font-bold'> <span className='text-white'>World Largest Gardening Tools </span><span className='text-red-600'>Manufacturing Industries.</span></p>

            <div class=" shadow bg-transparent flex flex-col lg:flex-row lg:justify-around pb-5 lg:pb-10">
                <div className='mx-auto'>
                    <div class="stat pl-14">
                        <FontAwesomeIcon className='stat-value text-white border rounded p-4' icon={faCalendarDays} />
                        <div class="stat-value text-red-600">28Yr</div>
                        <div class="text-white">Years Of Experience</div>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div class="stat pl-12">
                        <FontAwesomeIcon className='stat-value text-white border rounded p-4' icon={faList} />
                        <div class="stat-value text-red-600">3.6M+</div>
                        <div class="text-white">Complete Projects</div>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div class="stat pl-7">
                        <FontAwesomeIcon className='stat-value text-white border rounded p-4' icon={faUsers} />
                        <div class="stat-value text-red-600">2.5K+</div>
                        <div class="text-white">Happy Clients</div>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div class="stat pl-0">
                        <FontAwesomeIcon className='stat-value text-white border rounded p-4' icon={faTruckFast} />
                        <div class="stat-value text-red-600">86%</div>
                        <div class="text-white">Tasks done</div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default BusinessSummary;