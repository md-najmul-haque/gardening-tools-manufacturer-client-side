import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummary />
            <WhyChooseUs />
            <Reviews />
            <ContactUs />

        </div>
    );
};

export default Home;