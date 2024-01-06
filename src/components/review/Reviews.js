import React from 'react';
import { FaStar } from "react-icons/fa";
import img from "../../assets/images/logo/man.png"

const Reviews = () => {
    return (
        <div className='w-2/3 m-auto py-10'>
            <div>
                <div class="flex items-center mb-4">
                    <img class="w-10 h-10 me-4 rounded-full" src={img} alt="" />
                    <div class="font-medium">
                        <p>Rocky</p>
                    </div>
                </div>
                <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                </div>
                <div class="mb-5 text-sm text-gray-900">
                    <h3 class="text-lg font-semibold text-gray-900">Thinking to buy another one!</h3>
                    <p>Reviewed in <time datetime="2017-03-03 19:00">December 7, 2023</time></p>
                </div>
                <p class="mb-3 w-4/5 text-gray-800">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
            </div>
            <div>
                <div class="flex items-center mb-4">
                    <img class="w-10 h-10 me-4 rounded-full" src={img} alt="" />
                    <div class="font-medium">
                        <p>Rocky</p>
                    </div>
                </div>
                <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />
                    <FaStar color='#FFBF00' />

                </div>
                <div class="mb-5 text-sm text-gray-900">
                    <h3 class="text-lg font-semibold text-gray-900">Thinking to buy another one!</h3>
                    <p>Reviewed in <time datetime="2017-03-03 19:00">December 7, 2023</time></p>
                </div>
                <p class="mb-3 w-4/5 text-gray-800">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
            </div>
        </div>

    );
};

export default Reviews;