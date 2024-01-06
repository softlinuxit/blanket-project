import React from 'react';
import './Policy.css'

const PrivacyPolicy = () => {
    return (
        <div className='py-8 lg:py-12 px-8 md:px-12 lg:px-24 '>
            <h2 className='privacyTextColor text-center text-3xl lg:text-4xl font-semibold pb-6 lg:pb-8'>Privacy Policy</h2>
            <p className="py-3">Last Updated: 10/18/2023</p>
            <p>At Onlineblanket.in powered by SoftlinuxIT solutions, we take your privacy seriously. This privacy policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our website or purchase our products. Please read this policy carefully to understand how we handle your data.</p>
            <h3 className='privacyTextColor font-semibold py-4'>1. Information We Collect</h3>
            <p>Personal Information: When you make a purchase or create an account, we may collect personal information, including your name, email address, shipping address, and phone number.</p>
            <p>Payment Information: We may collect payment information, such as credit card details, to process your orders. However, we do not store this information on our servers. It is securely handled by our payment processor.</p>
            <p>Order Information: We collect data related to your orders, including product details, order history, and shipping and billing information.</p>
            <p>Communication Data: We may collect information you provide when you contact us, including emails, chat logs, and phone call records.</p>
            <p>Device Information: We may collect information about the device and browser you use to access our website, including IP addresses, browser types, and device identifiers.</p>
            <p>Usage Information: We gather information about how you use our website, including pages visited, time spent on the site, and referral sources.</p>
            <p>Cookies and Similar Technologies: We use cookies and similar technologies to collect data about your browsing activities. You can manage your cookie preferences in your browser settings.</p>
            <h3 className='privacyTextColor font-semibold py-4'>2. How We Use Your Information</h3>
            <p>We use the information we collect for various purposes, including but not limited to:</p>
            <div className='listStyle'>
                <li>Processing and fulfilling your orders.</li>
                <li>Communicating with you about your orders and providing customer support.</li>
                <li>Improving our website and services.</li>
                <li>Sending promotional offers and newsletters (with your consent).</li>
                <li>Complying with legal obligations.</li>
            </div>
            <h3 className='privacyTextColor font-semibold py-4'>3. Data Security</h3>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission or storage system is entirely secure, and we cannot guarantee absolute security.</p>
            <h3 className='privacyTextColor font-semibold py-4'>4. Data Sharing</h3>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <div className='listStyle'>
                <li>Payment processors to facilitate transactions.</li>
                <li>Shipping companies for order delivery.</li>
                <li>Legal and regulatory authorities when required by law.</li>
            </div>
            <h3 className='privacyTextColor font-semibold py-4'>5. Your Rights</h3>
            <p>You have the right to:</p>
            <div className='listStyle'>
                <li>Access and review your personal information.</li>
                <li>Correct inaccuracies in your personal information.</li>
                <li>Request the deletion of your personal information.</li>
                <li>Object to the processing of your personal information.</li>
                <li>Request the transfer of your personal information.</li>
            </div>
            <h3 className='privacyTextColor font-semibold py-4'>6. Changes to Privacy Policy</h3>
            <p>We may update this privacy policy to reflect changes in our practices. The “Last Updated” date at the beginning of the policy will indicate the most recent revisions.</p>
            <h3 className='privacyTextColor font-semibold py-4'>7. Contact Us</h3>
            <p>If you have questions or concerns about our privacy policy or your personal information, please contact us at:</p>
            <div className='listStyle'>
                <li className='listText'>info@onlineblanket.in</li>
                <li>We are committed to protecting your privacy and providing you with a secure and enjoyable shopping experience at Onlineblanket.in powered by SoftlinuxIT solutions</li>
            </div>
        </div>
    );
};

export default PrivacyPolicy;