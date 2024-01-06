import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className='py-8 lg:py-12 px-8 md:px-12 lg:px-24'>
            <h2 className='privacyTextColor text-center text-3xl lg:text-4xl font-semibold pb-6 lg:pb-8'>Shipping Policy</h2>
            <h3 className='privacyTextColor font-semibold py-4'>1. Shipping Methods:</h3>
            <p>Clearly state the shipping methods available standard shipping and express shipping. Blanket is a heavy and large spacing product so it may take 3-7 days for delivery.</p>
            <h3 className='privacyTextColor font-semibold py-4'>2. Shipping Costs:</h3>
            <p>For now we are delivering our products to 6 states in India and one UT i.e Chandigarh. The flat fees for shipping is 300 INR for each product in the 3 states. States are Uttar pardesh, Rajasthan and Himachal pradesh.</p>
            <div className='listStyle'>
                <li>And 250 Flat for each product in states and chandigarh (UT). States are Delhi, Chandigarh, Haryana and Punjab.</li>
                <li>For other states orders, Customers can contact us on our phone, whatsapp and email. We will manage it after discussion with customers.</li>
            </div>
            <h3 className='privacyTextColor font-semibold py-4'>3. Shipping Destinations:</h3>
            <div className='listStyle'>
                <li>For now we are offering our services for Delhi, Haryana, Punjab, Uttar pradesh, Rajasthan, himachal pradesh and chandigarh.</li>
                <li>For other states orders, Customers can contact us on our phone, whatsapp and email. We will manage it after discussion with customers.</li>
            </div>
            <h3 className='privacyTextColor font-semibold py-4'>4. Order Processing Time:</h3>
            <p>Communicate the time it takes to process orders before they are shipped. Include information about business days and any possible delays during peak seasons.</p>
            <h3 className='privacyTextColor font-semibold py-4'>5. Tracking Orders:</h3>
            <p>Customers will receive tracking information for their orders and how they can access it. This helps customers monitor their shipments.</p>
            <h3 className='privacyTextColor font-semibold py-4'>6. Shipping Discounts or Promotions:</h3>
            <p>Shipping discounts are based on orders quantity as well as a small direct discussion with customers.</p>
            <h3 className='privacyTextColor font-semibold py-4'>7. Contact Information:</h3>
            <div className='listStyle'>
                <li><span className='font-semibold'>Address</span><br /> #209 Basant Vihar, Ratauli Road, Yamunanagar , Haryana (135003)</li>
                <li><span className='font-semibold'>Phone</span><br /> +91-7015070211 , +91-7015465304</li>
                <li><span className='font-semibold'>Whatspp</span><br /> +91-7015070211 , +91-7015465304</li>
                <li><span className='font-semibold'>Email</span><br /> <span className='listText'>info@onlineblanket.in <br />onlineblankets@gmail.com</span></li>
            </div>
        </div>
    );
};

export default ShippingPolicy;