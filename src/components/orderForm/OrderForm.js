import React from 'react';
import { useForm } from 'react-hook-form';

const OrderForm = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName" className="block text-gray-700">First name</label>
                <input {...register("firstName")} />
                <label>Gender Selection</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>

        </div>
    );
};

export default OrderForm;