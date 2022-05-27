import { faBiking, faChildren, faCloudSunRain, faHeart, faLocationCrosshairs, faPersonBiking, faTruckFast, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import './Feature.css'

const Feature = () => {

    return (
        <div id='feature' className='feature-container'>
            <div className='feature-section'>
                <h1 className='text-2xl font-bold text-center text-primary'>Why you choose us?</h1>

                <div className='feature-details'>

                    <div>
                        <p> <span><FontAwesomeIcon icon={faCloudSunRain} /></span> <span>Best Deals With Lowest Pricing</span></p>
                        <p>Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you. That’s how we would like to be treated, and that is how our clients are treated.</p>
                    </div>

                    <div>
                        <p> <span><FontAwesomeIcon icon={faLocationCrosshairs} /></span> <span>Highly Professional Staff</span></p>
                        <p>We have worked with select casinos and state agencies for many years. Their rule, if we miss a deadline, we are out. Period. They have some of the tightest turnarounds in the business and we have never missed a single one.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faHeart} /></span> <span>Creativity</span></p>
                        <p>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great they will get results.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faTruckFast} /></span> <span>Quick Shipment</span></p>
                        <p>We delivered your order in the shortest time anywhere in the world</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faPersonBiking} /></span> <span>Award-Winning</span></p>
                        <p>We have won the international Communicator’s Award on behalf of our clients six times, chosen from over 6000 entries. Work with us, and you will work with seasoned professionals, vigilant of deadlines, and committed to exceeding client expectations.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faChildren} /></span> <span>Special Kids Bike</span></p>
                        <p>Most famous and best selling kids bike brand all over the world, with patented components featuring outstanding designs and quality. The most popular Freestyle kids bike. We believe our little riders deserve the best.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faBiking} /></span> <span>Next Generation Bike</span></p>
                        <p>World's first shaft transmission (no chain) bike, has magnesium alloy wheels and puncture proof tyres to ensure hassle free rides.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsers} /></span> <span> 24/7 Customer Support</span></p>
                        <p>We Provide 24/7 customer service to give you the best service. Our experienced stuff will is always ready to give you best support</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;