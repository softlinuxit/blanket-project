import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/images/logo/PhonePe Payment Solutions.png'
import OrderForm from '../../components/orderForm/OrderForm';

const Checkout = () => {
    const [showCoupon, setShowCoupon] = useState(false);
    const { register, control, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const toggleCoupon = () => {
        setShowCoupon(!showCoupon);
    };

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const itemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(itemsFromStorage);
    }, []);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const stateName = [
        { id: 1, name: 'Chandigarh' },
        { id: 2, name: 'West Bengal' },
        { id: 3, name: 'Delhi' },
        { id: 4, name: 'Mumbai' },
        { id: 5, name: 'Punjab' },
    ]
    return (
        <div className='py-10 px-6 lg:px-20'>
            <div className='lg:w-1/2 m-auto'>
                <p className='text-base'>Returning customer? <Link to={'/login'} className='font-semibold'>Click here to login</Link></p>
                <p className='text-base pt-2'>Have a coupon? <button
                    className='font-semibold'
                    onClick={toggleCoupon}
                >Click here to enter your code</button></p>
                {showCoupon && (
                    <div className='border border-dashed flex flex-col px-12 py-10 my-8'>
                        <input
                            className='border focus:border-none py-3 mb-4 placeholder:text-gray-600 placeholder:ps-2'
                            placeholder='Coupon code'
                        />
                        <button className='productButton font-semibold text-sm py-2 px-4 w-1/3 m-auto rounded-full'>
                            Apply coupon
                        </button>
                    </div>
                )}
            </div>
            <div className='grid grid-cols-2'>
                <div className='py-10'>
                    <OrderForm />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='lg:flex justify-between'>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-gray-700">First name</label>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{ required: 'First name is required' }}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full border rounded py-3 px-12"
                                            // placeholder="First name"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-gray-600">Last name</label>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{ required: 'Email is required' }}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full border rounded py-3 px-12"
                                            placeholder="Last name"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700">Company name (optional)</label>
                            <Controller
                                name="company"
                                control={control}
                                // rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full border rounded py-3 px-3"
                                        //placeholder="Company name"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.company && <p className="text-red-500">{errors.company.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700">Country/Region</label>
                            <Controller
                                name="company"
                                control={control}
                                // rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full rounded py-3 px-3"
                                        placeholder="India"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.company && <p className="text-red-500">{errors.company.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="street" className="block text-gray-600">Street address</label>
                            <Controller
                                name="street"
                                control={control}
                                rules={{ required: 'Street is required' }}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="street"
                                        className="w-full border rounded mb-4 py-3 px-3"
                                        placeholder="House number and street name"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name="street"
                                control={control}
                                // rules={{ required: 'Street is required' }}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="street"
                                        className="w-full border rounded py-3 px-3"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700">Town/City</label>
                            <Controller
                                name="city"
                                control={control}
                                rules={{ required: 'City is required' }}
                                render={({ field }) => (
                                    <input
                                        type="email"
                                        id="city"
                                        className="w-full border rounded py-3 px-3"
                                        // placeholder="City"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700">State</label>
                            <select>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                            </select>
                            <Controller
                                control={control}
                                defaultValue={stateName.map(c => c.value)}
                                name="options"
                                render={({ field: { onChange, value, ref } }) => (
                                    <select>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                    </select>
                                )}
                            />
                            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pinCode" className="block text-gray-700">PIN Code</label>
                            <Controller
                                name="pinCode"
                                control={control}
                                rules={{ required: 'PIN Code is required' }}
                                render={({ field }) => (
                                    <input
                                        type="number"
                                        id="pinCode"
                                        className="w-full border rounded py-3 px-3"
                                        // placeholder="Pin Code"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.pinCode && <p className="text-red-500">{errors.pinCode.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: 'Phone is required' }}
                                render={({ field }) => (
                                    <input
                                        type="phone"
                                        id="phone"
                                        className="w-full border rounded py-3 px-3"
                                        // placeholder="Phone"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email address</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border rounded py-3 px-3"
                                        // placeholder="Email"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">

                            <Controller
                                name="createAccount"
                                control={control}
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="createAccount"
                                        className="w-full border rounded py-3 px-3"
                                        placeholder="Email"
                                        {...field}
                                    />
                                )}
                            />
                            <label htmlFor="createAccount" className="block text-gray-700">Create an account?</label>
                            {errors.createAccount && <p className="text-red-500">{errors.createAccount.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Controller
                                name="createAccount"
                                control={control}
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="createAccount"
                                        className="w-full border rounded py-3 px-3"
                                        placeholder="Email"
                                        {...field}
                                    />
                                )}
                            />
                            <label htmlFor="createAccount" className="block text-gray-700">Ship to a different address?</label>
                            {errors.createAccount && <p className="text-red-500">{errors.createAccount.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="orderNotes" className="block text-gray-700">Order notes (optional)</label>
                            <Controller
                                name="orderNotes"
                                control={control}
                                // rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="orderNotes"
                                        className="w-full border rounded pt-3 pb-20 px-3"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        {...field}
                                    />
                                )}
                            />
                            {errors.orderNotes && <p className="text-red-500">{errors.orderNotes.message}</p>}
                        </div>



                        <input type="submit" />
                    </form>
                </div>
                <div className='bg-gray-50 p-6'>
                    <div className='flex justify-between border-b py-4'>
                        <span className='font-semibold uppercase'>Product</span>
                        <span className='font-semibold uppercase'>Subtotal</span>
                    </div>
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex justify-between items-center border-b py-3'>
                                <span>{item.name} x {item.quantity}</span>
                                <span className='cartText'>${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between border-b py-3'>
                        <span>Subtotal</span>
                        <span className='cartText'>${totalPrice}</span>
                    </div>
                    <div className='flex flex-col border-b py-3'>
                        <span>Shipping</span>
                        <span className='pt-3'>Flat rate</span>
                    </div>
                    <div className='flex justify-between py-8'>
                        <span className='text-xl'>Total</span>
                        <span className='text-xl font-semibold cartText'>${totalPrice}</span>
                    </div>
                    <span className='font-semibold'>PhonePe Payment Solutions</span>
                    <img className='w-1/4 py-2' src={img} alt='' />
                    <div className='flex flex-col'>
                        <span className='bg-gray-200 p-3'>All UPI apps, Debit and Credit Cards, and NetBanking accepted | Powered by PhonePe</span>
                        <span className='py-4'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link className='cartText' to={"/privacy-policy"}>privacy policy</Link>.</span>
                    </div>
                    <button className='productButton uppercase font-semibold my-8 py-2 lg:py-4 px-24 text-sm rounded-full'>Place Order</button>
                </div>


            </div>
        </div>
    );
};

export default Checkout;