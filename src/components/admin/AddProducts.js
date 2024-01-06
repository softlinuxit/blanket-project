import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
    };
    return (
        <div className='py-4 px-8'>
            <div className='relative overflow-x-auto'>
                <div className='w-full m-auto'>
                    <form className='py-10 px-8 lg:px-80 bg-slate-50 rounded' onSubmit={handleSubmit(onSubmit)}>
                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Product Name:</label>
                            <input className="w-full border rounded-md py-2 ps-3 pe-56" {...register('productName', { required: 'Product Name is required' })} />
                            {errors.productName && <p>{errors.productName.message}</p>}
                        </div>

                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Description:</label>
                            <textarea className="w-full border rounded-md py-2 ps-3 pe-20" {...register('description', { required: 'Description is required' })} />
                            {errors.description && <p>{errors.description.message}</p>}
                        </div>

                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Image URL:</label>
                            <input className="w-full border rounded-md py-2 ps-3 pe-20" type="url" {...register('imageUrl', { required: 'Image URL is required' })} />
                            {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
                        </div>

                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Real Price:</label>
                            <input className="w-full border rounded-md py-2 ps-3 pe-20" type="number" step="0.01" {...register('realPrice', { required: 'Real Price is required' })} />
                            {errors.realPrice && <p>{errors.realPrice.message}</p>}
                        </div>

                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Discounted Price:</label>
                            <input className="w-full border rounded-md py-2 ps-3 pe-20" type="number" step="0.01" {...register('discountedPrice', { required: 'Discounted Price is required' })} />
                            {errors.discountedPrice && <p>{errors.discountedPrice.message}</p>}
                        </div>

                        <div className='py-2'>
                            <label className="block text-gray-600 ps-2">Category:</label>
                            <input className="w-full border rounded-md py-2 ps-3 pe-20" {...register('category', { required: 'Category is required' })} />
                            {errors.category && <p>{errors.category.message}</p>}
                        </div>

                        <button className='py-2' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;