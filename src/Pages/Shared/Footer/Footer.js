import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer style={{ color: 'white' }} class="footer bg-lime-900 p-10 text-base-content">

            <div>
                <span class="text-xl font-bold text-white">Gardening Plus</span>
                <Link to='' class="link link-hover">Our Heritage</Link>
                <Link to='' class="link link-hover">Sustainability</Link>
                <Link to='' class="link link-hover">Blogs</Link>
                <Link to='' class="link link-hover">Portfolio</Link>
            </div>

            <div>
                <span class="text-xl font-bold text-white">Services</span>
                <Link to='' class="link link-hover">Wholesale</Link>
                <Link to='' class="link link-hover">Long Warranty Service</Link>
                <Link to='' class="link link-hover">Free Shipping</Link>
                <Link to='' class="link link-hover">24/7 Customer Service</Link>
            </div>

            <div>
                <span class="text-xl font-bold text-white">Legal</span>
                <Link to='' class="link link-hover">Terms and Conditions</Link>
                <Link to='' class="link link-hover">Privacy Policy</Link>
                <Link to='' class="link link-hover">Cookie Policy</Link>
            </div>
            <div>
                <span class="text-xl font-bold text-white">Newsletter</span>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text text-white">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;