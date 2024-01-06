import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Register = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="bg-white text-black py-8 px-8 md:px-16 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-semibold mb-4">Create Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border rounded-md py-2 ps-3 pe-20"
                                    placeholder="Name"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'Email is required' }}
                            render={({ field }) => (
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border rounded-md py-2 ps-3 pe-20"
                                    placeholder="Email"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'Phone Number is required' }}
                            render={({ field }) => (
                                <input
                                    type="phone"
                                    id="phone"
                                    className="w-full border rounded-md py-2 ps-3 pe-20"
                                    placeholder="Phone number"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'Password is required' }}
                            render={({ field }) => (
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full border rounded-md py-2 ps-3 pe-20"
                                    placeholder="Password"
                                    {...field}
                                />
                            )}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md"
                    >
                        Login
                    </button>
                </form>
                <p className='py-4 text-cente'>Already have an account? <Link to={"/login"} className='text-blue-500'>Login here</Link></p>
                <div className='flex justify-evenly'>
                    <FcGoogle className='h-10 w-10' />
                    <FaFacebook className='h-10 w-10' color='#3b5998' height={50} width={50} />
                    <FaLinkedin className='h-10 w-10' color='#0a66c2' />
                </div>
            </div>
        </div>
    );
};

export default Register;