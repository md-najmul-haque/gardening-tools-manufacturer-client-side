import { faArrowRight, faArrowRightLong, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import photo2 from '../../../assets/WhyChooseUs/photo2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
    return (
        <div>

            <div data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1000" class="hero min-h-fit py-20">

                <div class="hero-content shadow-xl flex-col lg:flex-row">
                    <img src={photo2} class="max-w-xl rounded-lg shadow-2xl" alt='' />

                    <div className='lg: ml-10'>
                        <div class="indicator">
                            <span class="indicator-item badge badge-error bg-red-500 text-white p-3">30% off</span>
                            <div class="grid place-items-center text-3xl  lg:text-4xl font-bold">Hot Deal: Lowest Wholesale Rate</div>
                        </div>
                        <div className='ml-6'>
                            <div>
                                <h2 className='text-xl font-semibold'> <span><FontAwesomeIcon icon={faArrowRight} /></span> 28 Years Experience In Gardening Tools</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'><span><FontAwesomeIcon icon={faArrowRight} /></span> Best Tools With Great Technology</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'><span><FontAwesomeIcon icon={faArrowRight} /></span> Extensive Period of Warranty.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'><span><FontAwesomeIcon icon={faArrowRight} /></span> 30% Discount on Hot Deal Packages.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div>
                        <Link to='/' class="btn btn-primary bg-gradient-to-r from-secondary to-primary ml-6 my-3 text-white">Book Now <FontAwesomeIcon className='ml-2' icon={faArrowRightLong} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AOS.init();
export default WhyChooseUs;