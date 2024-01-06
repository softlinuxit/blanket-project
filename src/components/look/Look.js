import React, { useState } from 'react';
import './Look.css'
import img from '../../assets/images/homepage slicing/download.png'

const Look = () => {
    const [selectedBtn, setSelectedBtn] = useState('Single');

    const handleButtonClick = (btnName) => {
        setSelectedBtn(btnName);
    };
    return (
        <div className="text-center p-5 lg:p-10">
            <div className="featureTextColor py-3 text-2xl lg:text-3xl">
                <h2>You may be <span className="featureTextSpan">looking</span> for</h2>
                <span className="featureTextSpan">Lorem ipsum is simple dummy text of the printing and typesetting industry.</span>
            </div>
            <div className="uppercase text-center lg:px-14 lg:flex justify-around ">
                <div>
                    <button
                        className={`uppercase rounded-full text-lg font-semibold border-0 shadow px-9 py-4 lg:py-6 my-2 w-72 lg:w-80 ${selectedBtn === 'Single' ? 'lookBtn1' : 'lookBtn2'}`}
                        onClick={() => handleButtonClick('Single')}
                    >
                        Single bed Blanket
                    </button>
                </div>
                <div>
                    <button
                        className={`uppercase rounded-full text-lg font-semibold border-0 shadow px-4 lg:px-9 py-4 lg:py-6 my-2 w-72 lg:w-80 ${selectedBtn === 'Double' ? 'lookBtn1' : 'lookBtn2'}`}
                        onClick={() => handleButtonClick('Double')}
                    >
                        Double bed Blanket
                    </button>
                </div>
                <div>
                    <button
                        className={`uppercase rounded-full text-lg font-semibold border-0 shadow px-9 py-4 lg:py-6 my-2 w-72 lg:w-80 ${selectedBtn === 'Doormats' ? 'lookBtn1' : 'lookBtn2'}`}
                        onClick={() => handleButtonClick('Doormats')}
                    >
                        Doormats
                    </button>
                </div>
            </div>
            {/* Remaining content */}
        </div>
    );
};

export default Look;