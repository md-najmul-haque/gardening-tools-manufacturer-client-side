import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import contactTool3 from '../../assets/contact/contactTool3.jpg'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    const [user, loading] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: tool, isLoading } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`)
    //     .then(res => res.json()))

    if (loading) {
        return <Loading />
    }


    const onSubmit = data => {

        const booking = {
            customerName: user.displayName,
            email: user.email,
            address: data.address,
            state: data.state,
            country: data.country,
            phone: data.phone,
            orderQuantity: data.number

        }
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
            });
        toast(`Thanks for your message`)
        reset();

    };

    return (

        <div class="hero contact-section min-h-fit pt-20 pb-40" >
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" class="hero-content w-11/12 shadow-2xl bg-base-100 flex-col lg:flex-row mx-auto">
                <div class="card w-96 shadow-xl image-full">
                    <figure><img src={contactTool3} alt="Shoes" /></figure>

                    <div class="card-body flex justify-center items-center">
                        <div>
                            <h2 class="card-title text-2xl font-bolt text-white">Happy to help!</h2>
                            <p className='text-white'>Feel free to contact with us. Hope, we will get back to you within 24 hours. Gardening Plus team will give free consultancy for you.
                            </p>
                            {/* <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div class="card-body w-96">
                    <h2 className="text-3xl text-primary font-bold">Request A Quote</h2>
                    <p>We ensure our customers receive the best quality prices and service. Feel free to mail us </p>

                    <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input bg-base-200  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs md:mr-7 mb-2"
                            {...register("name")} />

                        <input
                            type="text"
                            placeholder="Type here"
                            class="input bg-base-200 rounded-3xl border-2 focus:border-lime-600  w-full max-w-xs mb-2"
                            {...register("email")} />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input bg-base-200 border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs md:mr-7 mb-2"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is required'
                                }
                            })} />

                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}


                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input bg-base-200 outline-0  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs mb-2"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Your address is required'
                                }
                            })} />

                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

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

                        {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                        <button type="submit" class="btn max-w-xs btn-primary text-white">Submit Request <span className='ml-2'><FontAwesomeIcon icon={faArrowRightLong} /></span></button>

                        {/* <input type="submit" class="btn max-w-xs btn-primary text-white" value='Submit Request <span><FontAwesomeIcon icon={faCoffee} /></span> ' /> */}
                    </form>

                </div>

            </div>
        </div >


    );
};

AOS.init();
export default ContactUs;