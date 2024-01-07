import React, { useEffect, useState } from 'react';
import SingleQuilt from '../components/shop/SingleQuilt'
import Loader from '../shared/Loader';
import { FaAngleDown } from "react-icons/fa";

const Shop = () => {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
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
            const sortedByPriceHighToLow = [...sortedData].sort((a, b) => b.discountPrice - a.discountPrice);
            setSortedData(sortedByPriceHighToLow);
        } else if (selectedOption === 'lowToHigh') {
            const sortedByPriceLowToHigh = [...sortedData].sort((a, b) => a.discountPrice - b.discountPrice);
            setSortedData(sortedByPriceLowToHigh);
        } else if (selectedOption === 'category') {
            const sortedByCategory = [...sortedData].sort((a, b) => a.category.localeCompare(b.category));
            setSortedData(sortedByCategory);
        }
    };

    return (
        <div className='md:px-10 lg:px-20 py-6'>
            <div className='flex lg:justify-between justify-center items-center py-6'>
                <div className='hidden lg:block'>Showing all {sortedData.length} results</div>
                <select className='border py-2 px-4' onChange={handleChange}>
                    <option value="default">Default sorting</option>
                    <option value="highToLow">Sort by price: high to low</option>
                    <option value="lowToHigh">Sort by price: low to high</option>
                    <option value="category">Sort by category</option>
                    <option value="tags">Sort by tags</option>
                </select>

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