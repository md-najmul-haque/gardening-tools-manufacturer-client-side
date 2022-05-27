import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (

        <div className='my-10'>
            <h1 className='text-xl text-center font-bold text-primary'>TESTIMONIALS</h1>
            <h2 className='text-4xl text-center'>Our Customers <span className='font-bold'>Are Saying?</span></h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>

        </div>
    );
};

export default Reviews;