import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/soft-blanket/Product image.jpg'
import img2 from '../../assets/images/soft-blanket/Product image (1).jpg'
import img3 from '../../assets/images/soft-blanket/Product image (2).jpg'
import img4 from '../../assets/images/soft-blanket/Product image (3).jpg'
import img5 from '../../assets/images/soft-blanket/Product image (4).jpg'
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const SoftBlanket = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();

                const quiltProducts = data.filter(item => item.category === 'Soft Blanket');
                setProductData(quiltProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // const productData = [
    //     { id: 11, img: img1, alt: '', name: 'Chenille Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 22, img: img2, alt: '', name: 'Double-Sided Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 33, img: img3, alt: '', name: 'Luxury Heavy Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 44, img: img4, alt: '', name: 'Minky Weighted Blankets', price: 2100.00, discountPrice: 1800.00 },
    //     { id: 55, img: img5, alt: '', name: 'Plush Weighted Blankets', price: 2100.00, discountPrice: 1800.00 }
    // ]
    return (
        <>
            {
                productData.length ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-10 lg:px-20 py-16'>
                        {
                            productData.map(data => <SingleQuilt data={data} />)
                        }
                    </div>
                    :
                    <Loader />
            }
        </>
    );
};

export default SoftBlanket;