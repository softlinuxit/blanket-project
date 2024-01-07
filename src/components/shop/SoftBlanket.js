import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/soft-blanket/Product image.jpg'
import img2 from '../../assets/images/soft-blanket/Product image (1).jpg'
import img3 from '../../assets/images/soft-blanket/Product image (2).jpg'
import img4 from '../../assets/images/soft-blanket/Product image (3).jpg'
import img5 from '../../assets/images/soft-blanket/Product image (4).jpg'
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const SoftBlanket = () => {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                // setProductData(data);
                const filteredBabyBlankets = data.filter(item => item.category === 'Soft Blanket');
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
    const [productData, setProductData] = useState([]);


    // const productData = [
    //     { id: 11, img: img1, alt: '', name: 'Chenille Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 22, img: img2, alt: '', name: 'Double-Sided Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 33, img: img3, alt: '', name: 'Luxury Heavy Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 44, img: img4, alt: '', name: 'Minky Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 55, img: img5, alt: '', name: 'Plush Weighted Blankets', price: 2100.00, discountPrice: 1800.00 }
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

export default SoftBlanket;