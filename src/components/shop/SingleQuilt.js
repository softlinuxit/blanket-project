import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleQuilt = ({ data }) => {
    const navigate = useNavigate();
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
    return (
        <div key={data.id} className='border m-auto'>
            <Link
                to={`/products/${data.id}`}>
                <img className='w-96 hover:scale-110 transition duration-500 cursor-pointer' src={data.img} alt={data.alt} />
            </Link>

            <div className='flex flex-col items-center py-6'>
                <Link
                    to={`/products/${data.id}`}>
                    <h3 className='text-lg'>{data.name}</h3>
                </Link>
                {/* <h3 className='text-lg'>{data.name}</h3> */}
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
                <div className='flex'>
                    <Link
                        to={`/products/${data.id}`}
                        className='flex items-center py-2 px-4 mr-2 rounded-full productButton'>
                        <FaCartPlus className='me-2' />
                        View Cart
                    </Link>
                    <button
                        className='flex items-center py-2 px-4 rounded-full productButton'
                        onClick={() => addToCart(data.id, data.img[0], data.name, data.discountPrice)}
                    >
                        <FaCartPlus className='me-2' />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleQuilt;