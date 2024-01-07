import React, { useEffect, useState } from 'react';
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const SuperSoftBlanket = () => {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                const filteredBabyBlankets = data.filter(item => item.category === 'Super Soft Blanket');
                setSortedData(filteredBabyBlankets);
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
        }
    };

    return (
        <div className='md:px-10 lg:px-20 py-6'>
            <div className='flex lg:justify-between justify-center items-center py-6'>
                <div className='hidden lg:block'>Showing all {sortedData?.length} results</div>
                <select className='border py-2 px-4' onChange={handleChange}>
                    <option value="default">Default sorting</option>
                    <option value="highToLow">Sort by price: high to low</option>
                    <option value="lowToHigh">Sort by price: low to high</option>
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
        </div>
    );
};

export default SuperSoftBlanket;