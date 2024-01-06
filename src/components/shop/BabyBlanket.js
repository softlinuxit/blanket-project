import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/baby-blanket/baby1.jpg'
import img2 from '../../assets/images/baby-blanket/baby2.jpg'
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const BabyBlanket = () => {
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
                const filteredBabyBlankets = productData.filter(item => item.category === 'Baby Blanket');
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
            const sortedByPriceHighToLow = [...sortedData].sort((a, b) => b.price - a.price);
            setSortedData(sortedByPriceHighToLow);
        } else if (selectedOption === 'lowToHigh') {
            const sortedByPriceLowToHigh = [...sortedData].sort((a, b) => a.price - b.price);
            setSortedData(sortedByPriceLowToHigh);
        } else {
            const filteredBabyBlankets = productData.filter(item => item.category === 'Baby Blanket');
            setSortedData(filteredBabyBlankets);
        }
    };


    // const productData = [
    //     { id: 1111, img: img1, alt: '', name: 'Soft Baby blanket', price: 850.00, discountPrice: 600.00 },
    //     { id: 2222, img: img2, alt: '', name: 'Super soft Baby blanket', price: 850.00, discountPrice: 600.00 }
    // ]

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

export default BabyBlanket;