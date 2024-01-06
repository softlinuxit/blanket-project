import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/super-soft-blanket/Product image.jpg'
import img2 from '../../assets/images/super-soft-blanket/Product image (1).jpg'
import img3 from '../../assets/images/super-soft-blanket/Product image (2).jpg'
import img4 from '../../assets/images/super-soft-blanket/Product image (3).jpg'
import img5 from '../../assets/images/super-soft-blanket/Product image (4).jpg'
import img6 from '../../assets/images/super-soft-blanket/Product image (5).jpg'
import img7 from '../../assets/images/super-soft-blanket/Product image (6).jpg'
import img8 from '../../assets/images/super-soft-blanket/Product image (7).jpg'
import SingleQuilt from './SingleQuilt';
import Loader from '../../shared/Loader';

const SuperSoftBlanket = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();

                const quiltProducts = data.filter(item => item.category === 'Super Soft Blanket');
                setProductData(quiltProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // const productData = [
    //     { id: 111, img: img1, alt: '', name: 'Cloud-Like Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 222, img: img2, alt: '', name: 'Downy Comfort Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 333, img: img3, alt: '', name: 'Dreamy Comfort Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 444, img: img4, alt: '', name: 'Heavenly Soft Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 555, img: img5, alt: '', name: 'Super Soft Double Bed Heavy Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 666, img: img6, alt: '', name: 'Super Warm (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 777, img: img7, alt: '', name: 'Supreme Softness Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 },
    //     { id: 888, img: img8, alt: '', name: 'Ultra Cozy Blanket (Super Soft)', price: 3200.00, discountPrice: 2000.00 }
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

export default SuperSoftBlanket;