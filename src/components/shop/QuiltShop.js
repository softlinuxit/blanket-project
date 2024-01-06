import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/quilt/Product image.jpg'
import img2 from '../../assets/images/quilt/Product image (1).jpg'
import img3 from '../../assets/images/quilt/Product image (2).jpg'
import img4 from '../../assets/images/quilt/Product image (3).jpg'
import img5 from '../../assets/images/quilt/Product image (4).jpg'
import img6 from '../../assets/images/quilt/Product image (5).jpg'
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const QuiltShop = () => {
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
                setSortedData(data.filter(item => item.category === 'Quilt'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        let sortedProducts = [...sortedData];

        if (selectedOption === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (selectedOption === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else {
            // Reset to default sorting or original order
            sortedProducts = [...productData.filter(item => item.category === 'Quilt')];
        }

        setSortedData(sortedProducts);
    };

    // const productData = [
    //     { id: 1, img: img1, alt: '', name: 'Abstract Printed Reversible', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 2, img: img2, alt: '', name: 'Heavy Winter Double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 3, img: img3, alt: '', name: 'Luxury Soft double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 4, img: img4, alt: '', name: 'Microfiber Printed Double side', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 5, img: img5, alt: '', name: 'Microfiber Reversible Comforter', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    //     { id: 6, img: img6, alt: '', name: 'Super Soft Microfiber Heavy', price: 2100.00, discountPrice: 1800.00, stock: 2, category: 'Quilt' },
    // ]

    return (
        <div className='md:px-10 lg:px-20 py-6'>
            <div className='flex lg:justify-between justify-center items-center py-6'>
                <div className='hidden lg:block'>Showing all {sortedData?.length} results</div>
                <select className='border py-2 px-4' onChange={handleChange} >
                    <option value="default">Default sorting</option>
                    <option value="highToLow">Sort by price: high to low</option>
                    <option value="lowToHigh">Sort by price: low to high</option>
                </select>
            </div>
            {
                sortedData.length ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            sortedData.map(data => <SingleQuilt data={data} />)
                        }
                    </div>
                    :
                    <Loader />
            }
        </div>
    );
};

export default QuiltShop;