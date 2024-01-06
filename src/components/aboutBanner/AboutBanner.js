import React from 'react';
import './AboutBanner.css'
import line from '../../assets/images/homepage slicing/line2.png'
import blanket from '../../assets/images/homepage slicing/blanket.png'

const AboutBanner = () => {
    return (
        <div className="aboutBg grid lg:grid-cols-2 py-5 px-5 lg:px-24">

            <div className="flex items-center">
                <img src={line} alt="" />
                <div className="ps-2">
                    <span className="text-3xl lg:text-6xl uppercase">About us</span>
                    <p className="text-xs md:text-sm">Welcome to <span className='bannerTextSpan'>Onlineblanket.in</span>, where comfort meets style! We are passionate about providing the highest quality blankets to keep you warm, cozy, and stylish in every season.</p>
                </div>
            </div>
            <img className="w-1/2 lg:w-3/4 m-auto" src={blanket} alt="" />
        </div>
    );
};

export default AboutBanner;