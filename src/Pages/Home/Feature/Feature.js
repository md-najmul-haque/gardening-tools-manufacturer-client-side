import { faBiking, faChildren, faCloudSunRain, faHeart, faLocationCrosshairs, faPersonBiking, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import './Feature.css'

const Feature = () => {

    const featureProducts = [
        {
            id: 1, name: 'Pruning shears', icon: 'faCloudSunRain', speciality: 'Make clean cuts on stems and branches up to one inch thick with hand pruners that feel like a natural extension of your hand. Using pruning shears to regularly trim perennial flowers and fruit trees, deadhead blooming plants, or cut long, wayward branches out of shrubs encourages overall plant health, while refreshing your yard and garden’s overall appearance.To help you power through stems and branches, our garden shears feature a range of technologies to maximize your cutting power, as well as other innovative features designed to enhance overall performance and ergonomics.'
        },
        {
            id: 2, name: 'Hedge Shears', icon: 'faCloudSunRain', speciality: 'Making sure your garden hedges look beautiful is always a challenge. Happily, whatever your cutting requirements, Fiskars Hedge Shears can help. Carefully engineered for easy trimming, they keep haphazard hedges and bountiful bushes in shape.'
        },
        {
            id: 3, name: 'World Famed Axes', icon: 'faCloudSunRain', speciality: 'Double hardened steel blades with exceptional sharpness. The highest quality materials and attention to detail. Perfectly balanced to provide you with the most top swing speed and precision, multiplying the power at impact.'
        },
        {
            id: 4, name: 'Garden Trowels', icon: '', speciality: 'Why do people garden? For some, it is the joy of playing in the dirt, planting seeds and watching things grow. One key to success is to break up, loosen and aerate tough dirt in order to cultivate the earth to support healthier seeds and roots. That’s why one of the most important garden tools to have in your collection is a gardening trowel. Our collection of hand trowels ranges from durable, lightweight tools to multi-purpose garden trowels that also allow you to measure depth and handle seeds.'
        }
    ]

    return (
        <div id='feature' className='feature-container'>
            <div className='feature-section'>
                <h1 className='text-2xl font-bold text-center text-primary'>Our Top Selling Products</h1>

                <div className='feature-details'>

                    {
                        featureProducts.map(featureProduct => <FeatureProduct key={featureProduct.id} featureProduct={featureProduct} />)
                    }
                    {/* <div>
                        <p> <span><FontAwesomeIcon icon={faCloudSunRain} /></span> <span>All Weather Conditions</span></p>
                        <p>The All-weather bike is designed so that more people ride their bikes more often and sometimes leave their car behind. we make sure both are covered with waterproof and well insulated material.</p>
                    </div> */}
                    {/* <div>
                        <p> <span><FontAwesomeIcon icon={faLocationCrosshairs} /></span> <span>GPS Tracking / Anti-Theft</span></p>
                        <p>Our designed designs bicycle is now with GPS Tracking and Anti-Theft protection.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faHeart} /></span> <span>Sustainable Practices</span></p>
                        <p>Sustainability practices are incorporated into our curriculum as we are committed to protecting our environment to ensure a sustainable future for our children.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsers} /></span> <span>For All Age Group</span></p>
                        <p>We provide our best to give best product and service for all age group. we also provide all types of featured bike</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faPersonBiking} /></span> <span>Sport Bicycle</span></p>
                        <p>If speed is the name of your game, then you need a bike that's nimble and agile and built to go fast. Introducing the 700c women's volar 1400, a speedy, light road bike that's sure to quench your need for speed. </p>
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
                        <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>Exceptional Support</span></p>
                        <p>We Provide 24/7 customer service to give you the best service. Our experienced stuff will is always ready to give you best support</p>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Feature;