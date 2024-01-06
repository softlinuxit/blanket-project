import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="formBg text-center py-10 px-4 lg:px-20">
            <div className='flex flex-col'>
                <span className="uppercase text-3xl lg:text-4xl font-semibold">Fill the form</span>
                <span className="uppercase text-xs lg:text-sm tracking-wider font-semibold">We will call you back!!</span>
            </div>
            <div className="flex flex-col py-3">
                <input className="formInputColor text-sm rounded-full my-2 ps-2 py-3 lg:py-4 placeholder:uppercase placeholder:font-semibold" type="text" placeholder="Name" />
                <input className="formInputColor text-sm rounded-full my-2 ps-2 py-3 lg:py-4 placeholder:uppercase placeholder:font-semibold" type="email" placeholder="Enter email address" />
                <input className="formInputColor text-sm rounded-full my-3 ps-2 py-3 lg:py-4 placeholder:uppercase placeholder:font-semibold" type="number" placeholder="Phone number" />
                <input className="formInputColor text-sm rounded-lg my-2 ps-2 pt-2 pb-20 lg:pt-4 lg:pb:20 placeholder:uppercase placeholder:font-semibold" type="text" placeholder="Write description here..." />
            </div>
            <button className="formBtn border-0 rounded-full uppercase text-lg lg:text-xl font-semibold py-2 lg:py-4 px-12 mt-5">Submit</button>
        </div>
    );
};

export default ContactForm;