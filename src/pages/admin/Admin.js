import React, { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import AddProducts from '../../components/admin/AddProducts';
import AllProducts from '../../components/admin/AllProducts';
import AllUser from '../../components/admin/AllUser';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('allProducts');
    const renderComponent = () => {
        switch (activeTab) {
            case 'allProducts':
                return <AllProducts />;
            case 'addProducts':
                return <AddProducts />
            case 'allUser':
                return <AllUser />
            default:
                return null;
        }
    };
    return (
        <>
            <AdminNav />
            <div className=''>

                <div className='flex'>

                    <div className=' w-80 bg-gray-50 flex flex-col py-4'>

                        <button
                            className={`text-lg border-b py-4 ${activeTab === 'allProducts' ? 'cartText' : ''}`}
                            onClick={() => setActiveTab('allProducts')}
                        >
                            All Products
                        </button>
                        <button
                            className={`text-lg border-b py-4  ${activeTab === 'addProducts' ? 'cartText' : ''}`}
                            onClick={() => setActiveTab('addProducts')}
                        >
                            Add New Product
                        </button>
                        <button
                            className={`text-lg border-b py-4 ${activeTab === 'allUser' ? 'cartText' : ''}`}
                            onClick={() => setActiveTab('allUser')}
                        >
                            All User
                        </button>
                    </div>
                    <div className=''>
                        <div className='text-2xl text-center py-4 font-semibold cartText'>
                            Admin Dashboard
                        </div>

                        {renderComponent()}


                    </div>

                </div>
            </div>
        </>

    );
};

export default Admin;