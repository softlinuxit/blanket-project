import React from 'react';
import './Feel.css'
import blanket from '../../assets/images/homepage slicing/blanket.png'

const Feel = () => {
    return (
        <div className="feelBg pt-10 lg:py-12 lg:px-4 lg:flex rounded-2xl">
            <div className="hidden lg:block">
                <img className="w-4/5 m-auto lg:-mb-20" src={blanket} alt="" />
            </div>
            <div className="text-center">
                <div className="feelTitleBg uppercase py-3 rounded-full text-2xl font-semibold tracking-widest">
                    Feel the softness...
                </div>
                <p className="text-white uppercase text-2xl lg:text-2xl pt-5">What type of blanket to buy?</p>
                <p className="text-white text-xl lg:text-2xl py-5">Lorem ipsum is simple dummy text of the printing and typesetting industry.</p>
                <button className="feelBtnBg border-0 text-2xl font-semibold uppercase rounded-full py-2 lg:py-4 px-6">Call now</button>
            </div>
            <div className="lg:hidden pt-5">
                <img className="w-4/5 m-auto " src={blanket} alt="" />
            </div>
        </div>
    );
};

export default Feel;