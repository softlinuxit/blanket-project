import React from 'react';
import './ProductComponent.css'
import left from '../../assets/images/homepage slicing/left.png'
import right from '../../assets/images/homepage slicing/right.png'
import Product from '../product/Product';

const ProductComponent = ({ title, description, descriptionSpan }) => {
    return (
        <div className="py-10 px-2 lg:p-10">
            <div className="lg:flex justify-between items-center">
                <div className="featureTitleBg text-center lg:text-start uppercase tracking-widest  text-lg lg:text-xl font-semibold py-3 px-5 rounded-full ">
                    {title}
                </div>
                <div className="text-center pt-2 lg:pt-0">
                    <button className="border-0 bg-white"><img className="w-5/6" src={left} alt="" /></button>
                    <button className="border-0 bg-white"><img className="w-5/6" src={right} alt="" /></button>
                </div>
            </div>
            <div className="featureTextColor text-2xl lg:text-3xl py-3">
                <span>{description} <span className="featureTextSpan">{descriptionSpan}</span></span>
            </div>

            <Product />
        </div>
    );
};

export default ProductComponent;