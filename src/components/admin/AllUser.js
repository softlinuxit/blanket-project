import React from 'react';

const AllUser = () => {

    return (
        <div className='py-4 px-8'>
            <div className='relative overflow-x-auto'>
                <table className='w-5/6 m-auto'>
                    <thead className='border-b'>
                        <tr>
                            <th scope="col" className='pb-6'>User Image</th>
                            <th scope="col" className='pb-6'>User Name</th>
                            <th className='pb-6' scope="col">Password</th>
                            <th className='pb-6' scope="col">Mobile</th>
                            <th className='pb-6' scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody className='border-b my-6'>

                        <tr className='border-b'>
                            <td className='w-2/12 px-3 py-2'><img src='https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph' alt='' /></td>
                            <td className='px-4'>Rocky Khan</td>
                            <td className='px-4'>*********</td>
                            <td className='px-4'>00000111111</td>
                            <td className='px-4'>Rocky Khan home address</td>


                        </tr>
                        <tr className='border-b'>
                            <td className='w-2/12 px-3 py-2'><img src='https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph' alt='' /></td>
                            <td className='px-4'>Rocky Khan</td>
                            <td className='px-4'>*********</td>
                            <td className='px-4'>00000111111</td>
                            <td className='px-4'>Rocky Khan home address</td>


                        </tr>
                        <tr className='border-b'>
                            <td className='w-2/12 px-3 py-2'><img src='https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph' alt='' /></td>
                            <td className='px-4'>Rocky Khan</td>
                            <td className='px-4'>*********</td>
                            <td className='px-4'>00000111111</td>
                            <td className='px-4'>Rocky Khan home address</td>


                        </tr>
                        <tr className='border-b'>
                            <td className='w-2/12 px-3 py-2'><img src='https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph' alt='' /></td>
                            <td className='px-4'>Rocky Khan</td>
                            <td className='px-4'>*********</td>
                            <td className='px-4'>00000111111</td>
                            <td className='px-4'>Rocky Khan home address</td>


                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;