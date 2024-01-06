import React from 'react';
import './WhySection.css'
import blanket from '../../assets/images/homepage slicing/blanket1.png'

const WhySection = () => {
    return (
        <div className="aboutBgColor grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center py-10 lg:px-20">
            <div className="text-center">
                <span className="whyBgColor uppercase text-xl py-3 px-9 rounded-full">Why choose us?</span>
                <div className="py-6 px-4 text-start">
                    <p><span className="font-semibold text-base">Quality Assured:</span>We meticulously select materials that are soft, durable, and designed for long-term use.</p>
                    <p><span className="font-semibold text-base">Variety:</span> Whether you're looking for a plush throw for your living room or a lightweight, breathable option for your bedroom, we have a wide range of blankets to choose from.</p>
                    <p><span className="font-semibold text-base">Style and Elegance:</span> Our products come in a variety of colors, patterns, and textures to suit every taste and home decor style.</p>
                    <p><span className="font-semibold text-base">Customer-Centric:</span> Your satisfaction is our priority. We offer exceptional customer service, easy ordering, and secure delivery.</p>
                    <p><span className="font-semibold text-base">Ethical and Sustainable:</span> We are committed to sustainable practices, and many of our products are made with eco-friendly materials.</p>
                    <p>Discover the perfect blanket for you at Onlineblanket.in today!</p>
                </div>
            </div>
            <div className="text-center" >
                <img className="aboutImg" src={blanket} alt="" />
            </div>
        </div>
    );
};

export default WhySection;