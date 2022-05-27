import React from 'react';
import defaultUser from '../../../assets/user/defaultUser.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = ({ review }) => {

    const { name, img, feedback, country, rating } = review
    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body items-center text-center">
                <p class="card-title"> <img style={{ width: 40 }} className='w-6/12' src={img ? img : defaultUser} alt="Shoes" class="rounded-xl" /> {name}</p>
                <p>Review: {feedback}</p>
                <p>Rating: {rating}</p>
                <p>Country: {country}</p>
            </div>
        </div>
    );

};

AOS.init();


export default Review;