import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='my-10'>
            <h1 className='text-xl text-center font-bold text-primary'>TESTIMONIALS</h1>
            <h2 className='text-4xl text-center'>Our Customers <span className='font-bold'>Are Saying?</span></h2>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'> */}
            <Slider {...settings}>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Slider>
        </div>

        // </div>
    );
};

export default Reviews;