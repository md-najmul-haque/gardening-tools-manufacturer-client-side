import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Feature from '../Feature/Feature';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
            <Feature />

        </div>
    );
};

export default Home;