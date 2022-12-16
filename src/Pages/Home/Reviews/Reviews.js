import React from 'react';
import Review from '../Review/Review';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './reviews.css'
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';


const Reviews = (props) => {
    const { data: reviews, isLoading, refetch } = useQuery(['reviews'], () => fetch(`https://gardening-tools-manufacturer-server.onrender.com/reviews`)
        .then(res => {
            return res.json()
        }))

    if (isLoading) {
        return <Loading />
    }

    refetch()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    return (

        <div id='testimonial' className='my-10 bg-gray-50 py-10' >
            <h1 className='zoom-in text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2'>TESTIMONIALS</h1>
            <h2 className='text-4xl text-center mb-10'>Our Customers <span className='font-bold'>Are Saying?</span></h2>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

                className='bg-transparent pb-10'
            >

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Carousel >
        </div >
    );
};

<script>
    AOS.init();
</script>

export default Reviews;