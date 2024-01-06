import React from 'react';
import { FaArchive } from "react-icons/fa";

const Comforter = () => {
    return (
        <div className='comforterBg flex items-center py-5 px-6 mx-16 my-10'>
            <FaArchive />
            <span className='ps-2'>No products were found matching your selection.</span>
        </div>
    );
};

export default Comforter;