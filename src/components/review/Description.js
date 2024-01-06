import React from 'react';

const Description = () => {
    const desData = [
        { id: 1, title: 'Exceptional Warmth', des: 'Crafted with precision and using high-quality materials, our Heavy Winter Double-Sided Quilt provides an exceptional level of warmth. It’s your shield against the harshest winter weather, ensuring a snug and restful night’s sleep.' },
        { id: 2, title: 'Double-Sided Design', des: 'With a reversible design, this quilt offers you two equally inviting sides to choose from. You can easily switch between two comforting looks or tailor your bedding style to match your bedroom’s decor.' },
        { id: 3, title: 'Versatile Usage', des: 'Whether you’re curled up on a cold winter’s night, enjoying a cozy movie marathon, or adding an extra layer of warmth and elegance to your bed, this quilt seamlessly adapts to your needs and surroundings.' },
        { id: 4, title: 'Durable Quality', des: 'Our Heavy Winter Double-Sided Quilt is designed to withstand the test of time. The meticulous stitching and high-grade materials ensure that it remains a dependable and comforting presence in your life.' },
        { id: 5, title: 'Easy Maintenance', des: 'Keeping this exquisite quilt in impeccable condition is a breeze. Simple care instructions guarantee that it continues to provide the same warmth and comfort as the day you first experienced it.' },
    ]
    return (
        <div className='w-2/3 m-auto py-10'>
            <span>Key Features:</span>
            {
                desData.map(data => <div
                    key={data.id}>
                    <p className='py-2'>{data.id}.<span className='font-semibold'>{data.title}: </span>{data.des}</p>

                </div>)
            }
        </div>
    );
};

export default Description;