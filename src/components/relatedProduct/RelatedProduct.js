import React, { useEffect, useState } from 'react';
import { FaStar, FaCartPlus } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/quilt/Product image.jpg'
import img2 from '../../assets/images/quilt/Product image (1).jpg'
import img3 from '../../assets/images/quilt/Product image (2).jpg'
import img4 from '../../assets/images/quilt/Product image (3).jpg'
import img5 from '../../assets/images/quilt/Product image (4).jpg'
import img6 from '../../assets/images/quilt/Product image (5).jpg'
import img7 from '../../assets/images/soft-blanket/Product image.jpg'
import img8 from '../../assets/images/soft-blanket/Product image (1).jpg'
import img9 from '../../assets/images/soft-blanket/Product image (2).jpg'
import img10 from '../../assets/images/soft-blanket/Product image (3).jpg'
import img11 from '../../assets/images/soft-blanket/Product image (4).jpg'
import img12 from '../../assets/images/super-soft-blanket/Product image.jpg'
import img13 from '../../assets/images/super-soft-blanket/Product image (1).jpg'
import img14 from '../../assets/images/super-soft-blanket/Product image (2).jpg'
import img15 from '../../assets/images/super-soft-blanket/Product image (3).jpg'
import img16 from '../../assets/images/super-soft-blanket/Product image (4).jpg'
import img17 from '../../assets/images/super-soft-blanket/Product image (5).jpg'
import img18 from '../../assets/images/super-soft-blanket/Product image (6).jpg'
import img19 from '../../assets/images/super-soft-blanket/Product image (7).jpg'
// import img20 from '../../assets/images/baby-blanket/Product image.jpg'
// import img21 from '../../assets/images/baby-blanket/Product image (1).jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const RelatedProduct = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='lg:px-10 py-2'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {
                    productData?.map(data =>
                        <SwiperSlide className='px-16'>
                            <div className='border m-auto'>
                                <img className='w-96 hover:scale-110 transition duration-500 cursor-pointer' src={data.img[0]} alt={data.alt} />
                                <div className='flex flex-col items-center py-6'>
                                    <h3 className='text-lg'>{data.name}</h3>
                                    <div className='flex pt-2'>
                                        <FaStar color='#7F7F7F' />
                                        <FaStar color='#7F7F7F' />
                                        <FaStar color='#7F7F7F' />
                                        <FaStar color='#7F7F7F' />
                                        <FaStar color='#7F7F7F' />
                                    </div>
                                    <div className='flex py-2'>
                                        <p className='productPriceColor text-base line-through'>${data.price}</p>
                                        <p className='productPriceColor ps-2 text-base'>${data.discountPrice}</p>
                                    </div>
                                    <Link
                                        to={`/products/${data.id}`}
                                        className='flex items-center py-2 px-6 rounded-full productButton'>
                                        <FaCartPlus className='me-2' />
                                        View Cart
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default RelatedProduct;