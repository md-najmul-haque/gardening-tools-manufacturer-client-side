import React from 'react';
import Banner from '../Banner/Banner';

import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;