import React from 'react';
import defaultUser from '../../../assets/user/defaultUser.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Review = ({ review }) => {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    const { name, img, feedback, country, rating } = review
    return (

        // <Slider {...settings}>
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">

            <div class="card-body items-center text-center">
                <p class="card-title"> <img style={{ width: 40 }} className='w-6/12' src={img ? img : defaultUser} alt="Shoes" class="rounded-xl" /> {name}</p>
                <p>Review: {feedback}</p>
                <p>Rating: {rating}</p>
                <p>Country: {country}</p>
            </div>
        </div>
        // </Slider>


    );
};

export default Review;