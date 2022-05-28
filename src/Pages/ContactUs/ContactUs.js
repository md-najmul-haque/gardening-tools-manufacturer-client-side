import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import contactTool3 from '../../assets/contact/contactTool3.jpg'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const email = {
            customerName: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            message: data.message
        }
        fetch(`http://localhost:5000/contact`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
            });
        toast(`Thanks for your email`)
        reset();

    };

    return (

        <div className="hero contact-section min-h-fit pt-20 pb-40" >
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className="hero-content w-11/12 shadow-2xl bg-base-100 flex-col lg:flex-row mx-auto">
                <div className="card w-96 shadow-xl image-full">
                    <figure><img src={contactTool3} alt="Shoes" /></figure>

                    <div className="card-body flex justify-center items-center">
                        <div>
                            <h2 className="card-title text-3xl mb-2 font-bolt text-white">Happy to help!</h2>
                            <p className='text-white'>Feel free to contact with us. Hope, we will get back to you within 24 hours. Gardening Plus team will give free consultancy for you.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="card-body w-96">
                    <h2 className="text-3xl text-primary font-bold">Request A Quote</h2>
                    <p>We ensure our customers receive the best quality prices and service. Feel free to mail us </p>

                    <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="input bg-base-200  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs md:mr-7 mb-2"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />

                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input bg-base-200 rounded-3xl border-2 focus:border-lime-600  w-full max-w-xs mb-2"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide valid email address'
                                }
                            })} />

                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="input bg-base-200 border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs md:mr-7 mb-2"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is required'
                                }
                            })} />

                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="input bg-base-200 outline-0  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs mb-2"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Your address is required'
                                }
                            })} />

                        <input
                            type="textarea"
                            placeholder="Leave Your message here"
                            className="input bg-base-200 border-2 focus:border-lime-600  rounded-xl w-full h-36 max-w-xs lg:max-w-2xl my-3"
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: 'Your message is required'
                                }
                            })} />


                        <button type="submit" className="btn max-w-xs btn-primary  bg-gradient-to-r from-secondary to-primary  text-white">Submit Request <span className='ml-2'><FontAwesomeIcon icon={faArrowRightLong} /></span></button>

                    </form>

                </div>

            </div>
        </div >


    );
};

AOS.init();
export default ContactUs;