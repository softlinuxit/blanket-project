import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductImage = ({ productImages }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slider = setTimeout(() => {
            const nextSlide = (currentSlide + 1) % productImages?.length;
            setCurrentSlide(nextSlide);
        }, 3000);

        return () => {
            clearTimeout(slider);
        };
    }, [currentSlide, productImages?.length]);

    const backward = () => {
        setCurrentSlide(
            prevSlide => (prevSlide - 1 + productImages?.length) % productImages?.length,
        );
    };

    const forward = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % productImages?.length);
    };

    return (
        <div className={` items-center justify-center h-screen`}>
            <div className="relative overflow-hidden w-full lg:w-4/5 h-[80vh]">
                {productImages?.map((s, i) => (
                    <div
                        key={i}
                        className="absolute top-0 left-0 flex items-center justify-center h-full w-full transform transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(${currentSlide === i ? "0%" : currentSlide < i ? "-100%" : "100%"})`,
                            order: currentSlide === i ? 1 : 0,
                        }}
                    >
                        <img src={s} alt="" className={`w-full h-full`} />
                    </div>
                ))}
                <div className="absolute w-full flex justify-between top-1/2 -translate-y-1/2">
                    <button className={`rounded p-2 bg-white mx-1 `} onClick={() => backward()}>
                        <FaChevronLeft />
                    </button>
                    <button className={`rounded p-2 mx-1 bg-white `} onClick={() => forward()}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="relative flex items-center w-full mt-4">
                {productImages?.map((s, i) => (
                    <button
                        key={i}
                        className={`w-1/6 h-[10px] mx-1`}
                        onClick={() => setCurrentSlide(i)}
                    >
                        <img src={s} alt='' />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImage;