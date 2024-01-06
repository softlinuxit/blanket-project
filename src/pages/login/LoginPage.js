import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <div className='border-dashed p-4'>
                <label htmlFor="email" className="block text-gray-600">Username or Email</label>
                <input
                    type="email"
                    id="email"
                    className="w-full border rounded-md py-2 ps-3 pe-20"
                // placeholder="Email"
                />
                <label htmlFor="email" className="block text-gray-600">Password</label>
                <input
                    type="email"
                    id="email"
                    className="w-full border rounded-md py-2 ps-3 pe-20"
                // placeholder="Email"
                />
                <input
                    type="checked"
                    id="email"
                    className="w-full border rounded-md py-2 ps-3 pe-20"
                    placeholder="Email"
                />
            </div>
        </div>
    );
};

export default LoginPage;