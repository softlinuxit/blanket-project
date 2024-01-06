import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
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
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RelatedProduct from '../relatedProduct/RelatedProduct';
import Description from '../review/Description';
import TechnicalDetails from '../review/TechnicalDetails';
import Reviews from '../review/Reviews';
import ProductImage from './ProductImage';


const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('description');
    const navigate = useNavigate();

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


    const addToCart = (id, img, name, price) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        const itemExists = existingCartItems.some(item => item.id === id);

        if (itemExists) {
            alert('This item is already in the cart!');
            // toast.warning('This item is already in the cart!', {
            //     position: toast.POSITION.TOP_CENTER
            // });
        } else {
            const newCartItem = { id, img, name, price };
            existingCartItems.push(newCartItem);
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        }
        navigate("/cart")
    };

    const renderComponent = () => {
        switch (activeTab) {
            case 'description':
                return <Description />;
            case 'reviews':
                return <Reviews />
            case 'technicalDetails':
                return <TechnicalDetails />;
            default:
                return null;
        }
    };

    // const productData = [
    //     { id: 1, img: [img1, img2, img3], alt: '', name: 'Abstract Printed Reversible', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 2, img: [img2, img2, img2], alt: '', name: 'Heavy Winter Double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 3, img: [img3, img3, img3], alt: '', name: 'Luxury Soft double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 4, img: [img4, img4, img4], alt: '', name: 'Microfiber Printed Double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 5, img: [img5, img5, img5], alt: '', name: 'Microfiber Reversible Comforter', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 6, img: [img6, img6, img6], alt: '', name: 'Super Soft Microfiber Heavy', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 11, img: [img7, img7, img7], alt: '', name: 'Chenille Weighted Blankets', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Soft Blanket' },
    //     { id: 22, img: [img8, img8, img8], alt: '', name: 'Double-Sided Weighted Blankets', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Soft Blanket' },
    //     { id: 33, img: [img9, img9, img9], alt: '', name: 'Luxury Heavy Blankets', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Soft Blanket' },
    //     { id: 44, img: [img10, img10, img10], alt: '', name: 'Minky Weighted Blankets', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Soft Blanket' },
    //     { id: 55, img: [img11, img11, img11], alt: '', name: 'Plush Weighted Blankets', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Soft Blanket' },
    //     { id: 111, img: [img12, img12, img12], alt: '', name: 'Cloud-Like Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 222, img: [img13, img13, img13], alt: '', name: 'Downy Comfort Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 333, img: [img14, img14, img14], alt: '', name: 'Dreamy Comfort Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 444, img: [img15, img15, img16], alt: '', name: 'Heavenly Soft Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 555, img: [img16, img16, img16], alt: '', name: 'Super Soft Double Bed Heavy Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 666, img: [img17, img17, img17], alt: '', name: 'Super Warm (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 777, img: [img18, img18, img18], alt: '', name: 'Supreme Softness Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 888, img: [img19, img19, img19], alt: '', name: 'Ultra Cozy Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00, stock: 2, category: 'Super Soft Blanket' },
    //     { id: 1111, img: [img20, img20, img20], alt: '', name: 'Soft Baby blanket', price: 850.00, discountPrice: 600.00, stock: 2, category: 'Baby Blanket' },
    //     { id: 2222, img: [img21, img21, img21], alt: '', name: 'Super soft Baby blanket', price: 850.00, discountPrice: 600.00, stock: 2, category: 'Baby Blanket' }
    // ]
    const params = useParams();
    const data = productData?.find(p => p.id === parseInt(params.id)) || []
    console.log('ddd', data)


    return (
        <div>
            <div className='grid lg:grid-cols-2 py-8 px-10 lg:px-20'>
                <ProductImage productImages={data?.img} />
                <div>
                    <h2 className='text-3xl'>{data?.name}</h2>
                    <div className='flex py-2 '>
                        <p className='textGray text-2xl line-through'>${data?.price}</p>
                        <p className=' ps-2 text-2xl'>${data?.discountPrice}</p>
                    </div>
                    <p className='py-6 lg:py-10'>Prepare to conquer the coldest of winter nights with our Heavy Winter Double-Sided Quilt, a true masterpiece of warmth and versatility. This exceptional quilt is thoughtfully designed to provide you with an unparalleled level of coziness and comfort. Whether you're seeking refuge from the frigid chill or desiring a multipurpose bedding solution, our Heavy Winter Double-Sided Quilt is your reliable companion.</p>
                    <p className='py-3'>Hurry! only {data?.stock} left in stock</p>

                    <button
                        className='flex items-center py-2 px-4 rounded-full productButton'
                        onClick={() => addToCart(data.id, data.img[0], data.name, data.discountPrice)}
                    >
                        <FaCartPlus className='me-2' />
                        Add to Cart
                    </button>
                    <p className='py-3'>Category : <span className='cartText'>{data.category}</span></p>
                </div>
            </div>


            <div className='text-center '>
                <button
                    className={`text-xl ${activeTab === 'description' ? 'cartText' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={`text-xl px-8 ${activeTab === 'reviews' ? 'cartText' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews (2)
                </button>
                <button
                    className={`text-xl ${activeTab === 'technicalDetails' ? 'cartText' : ''}`}
                    onClick={() => setActiveTab('technicalDetails')}
                >
                    Technical data
                </button>
            </div>
            {renderComponent()}


            <RelatedProduct />
        </div>
    );
};

export default ProductDetail;