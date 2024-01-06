import React from 'react';
import './ContactInfo.css'
import call from '../../assets/images/homepage slicing/call.png'
import whatsapp from '../../assets/images/homepage slicing/whatsapp.png'
import mail from '../../assets/images/product page slicing/MAIL.png'

const ContactInfo = () => {

    return (
        <div className="contactBgColor grid lg:grid-cols-3 justify-center items-center py-5 my-10">
            <div className="text-center">
                <img className="m-auto" src={call} alt='' />
                <div className="flex flex-col">
                    <span className="text-xl font-semibold pb-2">Talk to us</span>
                    <span className="contactText font-semibold pb-2"><span className="contactInfoPhone">Phone No:</span>  +91 9034884290</span>
                    <span className="contactText font-semibold pb-2"><span className="contactInfoPhone">Phone No:</span>  +91 9034884290</span>
                </div>
            </div>
            <div className="text-center">
                <img className="m-auto" src={whatsapp} alt='' />
                <div className="flex flex-col">
                    <span className="text-xl font-semibold pb-2">Connect on whatsapp</span>
                    <span className="contactText font-semibold pb-2"><span className="contactInfoPhone">Phone No:</span>  +91 9034884290</span>
                    <span className="contactText font-semibold pb-2"><span className="contactInfoPhone">Phone No:</span>  +91 9034884290</span>
                </div>
            </div>
            <div className="text-center">
                <img className="m-auto" src={mail} alt='' />
                <div className="flex flex-col">
                    <span className="text-xl font-semibold pb-2">Contact us</span>
                    <span className="contactText font-semibold pb-2">mail@example.com</span>
                    <span className="contactText font-semibold pb-2">support@example.com</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;