import React from 'react';
import './ContactBanner.css'
import line from '../../assets/images/homepage slicing/line2.png'
import blanket from '../../assets/images/homepage slicing/blanket1.png'

const ContactBanner = () => {
    return (
        <div className="contactBg grid lg:grid-cols-2 justify-items-center
         items-center py-10 lg:py-20  px-8 lg:px-20">

            <div className="flex items-center">
                <div>
                    <img src={line} alt="" />
                </div>
                <div className="ps-3 flex flex-col">
                    <span className="uppercase font-semibold  text-4xl lg:text-6xl">Contact us</span>
                    <span className="text-xl">About us/ contact us</span>
                </div>
            </div>
            <img className="py-5" src={blanket} alt="" />
        </div>
    );
};

export default ContactBanner;