import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer style={{ color: 'white' }} className="footer bg-lime-900 p-10 text-base-content">

            <div>
                <span className="text-xl font-bold text-white">Gardening Plus</span>
                <Link to='' className="link link-hover">Our Heritage</Link>
                <Link to='' className="link link-hover">Sustainability</Link>
                <Link to='' className="link link-hover">Blogs</Link>
                <Link to='' className="link link-hover">Portfolio</Link>
            </div>

            <div>
                <span className="text-xl font-bold text-white">Services</span>
                <Link to='' className="link link-hover">Wholesale</Link>
                <Link to='' className="link link-hover">Long Warranty Service</Link>
                <Link to='' className="link link-hover">Free Shipping</Link>
                <Link to='' className="link link-hover">24/7 Customer Service</Link>
            </div>

            <div>
                <span className="text-xl font-bold text-white">Legal</span>
                <Link to='' className="link link-hover">Terms and Conditions</Link>
                <Link to='' className="link link-hover">Privacy Policy</Link>
                <Link to='' className="link link-hover">Cookie Policy</Link>
            </div>
            <div>
                <span className="text-xl font-bold text-white">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;