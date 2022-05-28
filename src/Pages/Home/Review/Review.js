import React from 'react';
import defaultUser from '../../../assets/user/defaultUser.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = ({ review }) => {

    const { name, img, feedback, country, rating } = review
    return (

        <div data-aos="fade-left"
            data-aos-easing="ease-out-sine"
            data-aos-duration="1000"
            className="card w-96 bg-base-100 shadow-2xl mb-5 mx-auto">
            <div className="card-body items-center text-center">
                <p className="card-title"> <img style={{ width: 40 }} className='w-6/12' src={img ? img : defaultUser} alt="Shoes" className="rounded-xl" /> {name}</p>
                <p>Review: {feedback}</p>
                <p>Rating: {rating}</p>
                <p>Country: {country}</p>
            </div>
        </div>
    );

};

AOS.init();


export default Review;