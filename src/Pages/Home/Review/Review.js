import React from 'react';
import defaultUser from '../../../assets/user/defaultUser.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {

    const { name, img, feedback, country, rating } = review
    return (

        <div data-aos="fade-left"
            data-aos-easing="ease-out-sine"
            data-aos-duration="1000"
            className="card w-96 bg-base-100 shadow-2xl mb-5 mx-auto">
            <div className="card-body items-center text-center">
                <img style={{ width: 80 }} className='w-6/12' src={img ? img : defaultUser} alt="customer-img" />
                <p className="card-title rounded-xl">{name}</p>
                <p className='pt-2 h-[120px]'>{feedback}</p>
                <div className='flex'>
                    {
                        rating >= 1 ? (<FontAwesomeIcon className="text-orange-400" icon={faStar} />) : <FontAwesomeIcon className="text-orange-200" icon={faStar} />
                    }

                    {
                        rating >= 2 ? (<FontAwesomeIcon className="text-orange-400" icon={faStar} />) : <FontAwesomeIcon className="text-orange-200" icon={faStar} />
                    }
                    {
                        rating >= 3 ? (<FontAwesomeIcon className="text-orange-400" icon={faStar} />) : <FontAwesomeIcon className="text-orange-200" icon={faStar} />
                    }
                    {
                        rating >= 4 ? (<FontAwesomeIcon className="text-orange-400" icon={faStar} />) : <FontAwesomeIcon className="text-orange-200" icon={faStar} />
                    }
                    {
                        rating >= 5 ? (<FontAwesomeIcon className="text-orange-400" icon={faStar} />) : <FontAwesomeIcon className="text-orange-200" icon={faStar} />
                    }

                </div>
                <p className=''>Country: {country}</p>
            </div>
        </div>
    );

};

AOS.init();


export default Review;