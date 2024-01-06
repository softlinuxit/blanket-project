import React from 'react';
import './OurStory.css'
import blanket from '../../assets/images/homepage slicing/blanket1.png'

const OurStory = () => {
    return (
        <div className="grid lg:grid-cols-2 items-center py-10 px-3 md:px-5 lg:px-10">
            <img className="aboutImgBg rounded-full m-auto p-10 lg:p-20" src={blanket} alt="" />
            <div className="px-5 py-5 text-center ">
                <span className="aboutTitleBG uppercase font-semibold rounded-full text-center py-3 px-9 tracking-wides">Our story</span>
                <p className="aboutParaColor text-start pt-5 leading-loose">Our journey began with a simple idea: to create a one-stop destination for all your Winter needs. We believe that a great product should do more than just keep you warm; it should reflect your personal style, match your decor, and provide a touch of luxury to your everyday life. <br /> With a team of passionate individuals who share a love for comfort and aesthetics, we’ve scoured the globe to handpick the finest materials and designs. We work closely with artisans and manufacturers to ensure that each product we offer is not only cozy but also a piece of art. Our commitment to quality and craftsmanship is the cornerstone of our brand.</p>
            </div>
        </div>
    );
};

export default OurStory;