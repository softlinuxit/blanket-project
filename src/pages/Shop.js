import React, { useEffect, useState } from 'react';
import SingleQuilt from '../components/shop/SingleQuilt'
import Loader from '../shared/Loader';
import { FaAngleDown } from "react-icons/fa";

const Shop = () => {
    const [productData, setProductData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setProductData(data);
                setSortedData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const selectedOption = e.target.value;

        if (selectedOption === 'highToLow') {
            const sortedByPriceHighToLow = [...sortedData].sort((a, b) => b.price - a.price);
            setSortedData(sortedByPriceHighToLow);
        } else if (selectedOption === 'lowToHigh') {
            const sortedByPriceLowToHigh = [...sortedData].sort((a, b) => a.price - b.price);
            setSortedData(sortedByPriceLowToHigh);
        } else if (selectedOption === 'category') {
            const sortedByCategory = [...sortedData].sort((a, b) => a.category.localeCompare(b.category));
            setSortedData(sortedByCategory);
        } else {
            setSortedData(productData);
        }
    };

    return (
        <div className='md:px-10 lg:px-20 py-6'>
            <div className='flex lg:justify-between justify-center items-center py-6'>
                <div className='hidden lg:block'>Showing all {productData.length} results</div>
                <select className='border py-2 px-4' onChange={handleChange}>
                    <option value="default">Default sorting</option>
                    <option value="highToLow">Sort by price: high to low</option>
                    <option value="lowToHigh">Sort by price: low to high</option>
                    <option value="category">Sort by category</option>
                    <option value="tags">Sort by tags</option>
                </select>
                {/* <div className="relative">
                    <button
                        className='flex items-center border py-2 px-4'
                        onClick={() => setOpenFilter(!openFilter)}><span className='pe-16'>Default sorting</span> <FaAngleDown /></button>
                    <div className={`absolute top-full left-0 p-2 w-48 bg-white shadow-lg z-50 ${openFilter ? 'block' : 'hidden'}`}>
                        <button className='py-1 cartText font-medium'>Sort by price: high to low</button>
                        <button className='py-1 border-b'>Sort by price: low to high</button>
                        <button className='py-1 border-b'>Sort by category</button>
                        <button className='py-1'>Sort by tags</button>
                    </div>
                </div> */}
            </div>
            {
                sortedData?.length ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {sortedData.map(data => <SingleQuilt key={data.id} data={data} />)}
                    </div>
                    :
                    <Loader />
            }
            {/* {
                productData?.length ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {

                            productData.map(data => <SingleQuilt data={data} />)

                        }
                    </div>
                    :
                    <Loader />
            } */}
        </div>
    );
};

export default Shop;