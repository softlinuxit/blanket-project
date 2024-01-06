import React from 'react';

const TechnicalDetails = () => {
    const allData = [
        { id: 1, title: 'Material', des: 'Microfiber' },
        { id: 2, title: 'Colour', des: 'Light blue & Grey double side color' },
        { id: 3, title: 'Seasons', des: 'Winter' },
        { id: 4, title: 'Size', des: 'King' },
        { id: 5, title: 'Number of Items', des: '1 Quilt with Bag' },
        { id: 6, title: 'Item Weight', des: '4.5 KG' },
        { id: 7, title: 'Item Model Number', des: 'Quilt 003' },
    ]
    return (
        <div className='lg:w-1/2 md:w-2/3 m-auto border my-10'>
            <div className="container mx-auto">
                {
                    allData.map(data => <div className="flex flex-row border-b border-gray-200">
                        <div className="w-2/5 py-2 px-4 text-left bg-gray-100 border-e">{data.title}</div>
                        <div className="w-3/5 py-2 px-4 text-left">{data.des}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TechnicalDetails;