import React from 'react';
import './Hero.css'
import banner from '../../assets/images/homepage slicing/banner.png'
import line from '../../assets/images/homepage slicing/line2.png'
import call from '../../assets/images/homepage slicing/call.png'
import whatsapp from '../../assets/images/homepage slicing/whatsapp.png'
import gmail from '../../assets/images/homepage slicing/Gmail.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {

    return (
        <div className="lg:flex">
            <div className="">
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className="flex items-center text-center ps-2 lg:ps-9 mt-[-120px] md:mt-[-150px] lg:mt-[-250px]">
                    <img src={line} alt="" />
                    <span className="cartText text-xl md:text-3xl lg:text-4xl uppercase">Good sleep, <br /> <span className="productPriceColor ps-3">better</span> aging</span>
                </div>
            </div>

            <div className="heroBg uppercase px-6 pt-12 lg:pt-4 mx-5 my-12 md:my-20 lg:my-0 text-white text-center py-2">
                <div  >
                    <div className="flex flex-col">
                        <span className="text-4xl font-serif">Hurry!!</span>
                        <span className="text-sm">Lorem ipsum is simple dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="py-2 flex flex-col">
                        <span className="text-3xl font-serif">Fill the form</span>
                        <span className="text-sm">We will call you back!!</span>
                    </div>
                    <div className="flex flex-col mx-2 lg:mx-8">
                        <input className="bg-transparent border border-white rounded-full py-3 px-8 placeholder:text-white placeholder:text-xs placeholder:uppercase" type="email" placeholder="Enter email Address" />
                        <input className="bg-transparent border border-white rounded-full py-3 px-8 placeholder:text-white placeholder:text-xs placeholder:uppercase my-2" type="number" placeholder="Phone number" />


                    </div>
                    <button className="productButton uppercase rounded-full py-2 px-20">Submit</button>
                    <p className="">or</p>
                </div>
                <div className="bg-white shadow-lg rounded-full flex justify-evenly py-2 lg:py-3 md:mx-20 mb-2 lg:mb-1">
                    <FcGoogle className='h-10 w-10' />
                    <FaFacebook className='h-10 w-10' color='#3b5998' height={50} width={50} />
                    <FaLinkedin className='h-10 w-10' color='#0a66c2' />
                </div>
            </div>
        </div>
    );
};

export default Hero;