import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader';

const AllProducts = () => {
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

                // setProductData(data);
                setSortedData(data)
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

    console.log('sort', sortedData)
    console.log('product', productData)
    return (
        <div className='py-4 px-8'>
            <div className='flex lg:justify-between justify-center items-center py-6'>
                <div className='hidden lg:block'>Showing all {sortedData.length} results</div>
                <select className='border py-2 px-4' onChange={handleChange}>
                    <option value="default">Default sorting</option>
                    <option value="highToLow">Sort by price: high to low</option>
                    <option value="lowToHigh">Sort by price: low to high</option>
                    <option value="category">Sort by category</option>
                    {/* <option value="tags">Sort by tags</option> */}
                </select>
            </div>
            {
                sortedData?.length ?
                    <div className='relative overflow-x-auto'>
                        <table className='w-5/6 m-auto'>
                            <thead className='border-b'>
                                <tr>
                                    <th scope="col" className='pb-6'>Product Image</th>
                                    <th scope="col" className='pb-6'>Product Name</th>
                                    <th className='pb-6' scope="col">Price</th>
                                    <th className='pb-6' scope="col">Discount Price</th>
                                    <th className='pb-6' scope="col">Stock</th>
                                    <th className='pb-6' scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody className='border-b my-6'>
                                {sortedData?.map((item) => (
                                    <tr className='border-b' key={item.id}>
                                        <td className='w-2/12 px-3 py-2'><img src={item.img} alt={item.name} /></td>
                                        <td className='px-3 '>
                                            {/* <FaTimes onClick={() => removeItem(item.id)} className='cursor-pointer' /> */}
                                            {item.name}
                                        </td>
                                        <td className='px-3'>${item.price}</td>
                                        <td>{item.discountPrice}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    :
                    <Loader />
            }
        </div>
    );
};

export default AllProducts;