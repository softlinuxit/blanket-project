import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const itemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemsWithInitialQuantity = itemsFromStorage.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
        setCartItems(itemsWithInitialQuantity);
    }, []);

    const increaseQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateCart(updatedCartItems);
    };

    const decreaseQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateCart(updatedCartItems);
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
        updateCart(updatedCartItems);
    };

    const updateCart = (updatedCartItems) => {
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className='px-6 lg:px-16 py-10'>
            <div className='comforterBg rounded lg:flex justify-between py-4 px-6 mb-10'>
                <div className='flex items-center'>
                    <FaRegCheckCircle />
                    <span className='ps-2'>“Quilt: Heavy Winter Double side” has been added to your cart.</span>
                </div>
                <button className='productButton py-1 px-2 rounded border hidden lg:block'><Link to={"/shop"}>Continue shopping</Link></button>
            </div>
            {/* Table */}
            {
                cartItems.length ? <div className='lg:flex'>
                    <div className='relative overflow-x-auto pe-4'>
                        <table className='w-full text-center'>
                            <thead className='border-b'>
                                <tr>
                                    <th scope="col" className='pb-6'>Product</th>
                                    <th className='pb-6' scope="col">Price</th>
                                    <th className='pb-6' scope="col">Quantity</th>
                                    <th className='pb-6' scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className='border-b my-6'>
                                {cartItems.map((item) => (
                                    <tr className='border-b' key={item.id}>

                                        <td className='flex items-center py-2'>
                                            <FaTimes onClick={() => removeItem(item.id)} className='cursor-pointer' />
                                            <img className='w-2/12 px-3' src={item.img} alt={item.name} />
                                            <span>{item.name}</span>
                                        </td>
                                        <td className='px-3'>${item.price}</td>
                                        <td className='px-3'>
                                            <div className='border flex  rounded-full py-2 px-3'>
                                                <button onClick={() => decreaseQuantity(item.id)}><FaMinus /></button>
                                                <span className='px-3'>{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)}><FaPlus /></button>
                                            </div>
                                        </td>
                                        <td className='px-3'>${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='lg:flex justify-between py-8 lg:pt-10'>
                            <div>
                                <input className='border py-2 me-2 placeholder:text-black placeholder:ps-2' placeholder='Coupon code' />
                                <button className='productButton font-semibold text-sm py-2 px-4 my-4 lg:my-0 rounded-full'>Apply coupon</button>
                            </div>
                            <div>
                                <button className='updateButton font-semibold text-sm py-2 px-4 rounded-full'>Update cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='border lg:w-1/2 m-auto p-6'>
                        <h3 className='text-2xl'>Cart totals</h3>
                        <div className='flex justify-between border-b py-4'>
                            <span className='font-semibold text-sm'>Subtotal</span>
                            <span className='cartText text-sm'>${totalPrice}</span>
                        </div>
                        <div className='flex flex-col border-b py-4'>
                            <span className='font-semibold text-sm'>Shipping</span>
                            <span className='text-sm py-4'>Flat rate</span>
                            <span className='text-sm'>Shipping to <span className='font-semibold cartText'>Chandigarh</span></span>
                            <a
                                href='/cart'
                                className='text-sm pt-4'
                            >Change address</a>
                        </div>
                        <div className='flex justify-between py-8'>
                            <span className='text-xl'>Total</span>
                            <span className='text-xl font-semibold cartText'>${totalPrice}</span>
                        </div>
                        <Link to={"/cart"} className='productButton uppercase font-semibold py-2 lg:py-4 px-2 lg:px-10 rounded-full'>Proceed to checkout</Link>
                    </div>
                </div>
                    :
                    <button className='productButton py-2 px-4 rounded-full'><Link to={"/shop"}>Return to shop</Link></button>
            }

        </div>
    );
};

export default Cart;