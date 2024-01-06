import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import linkedin from '../../assets/images/homepage slicing/linkedln.png'
import instagram from '../../assets/images/homepage slicing/instagram.png'
import fb from '../../assets/images/homepage slicing/fb.png'
import logo from '../../assets/images/logo/ONLINE-BLANKET-LOGO.jpg'

const Footer = () => {
    const footerText = [
        { id: 1, name: 'Terms and conditions', link: '/terms-and-conditions' },
        { id: 2, name: 'Privacy Policy', link: '/privacy-policy' },
        { id: 3, name: 'Contact us', link: '/contact' },
        { id: 4, name: 'Shipping policy', link: '/shipping-policy' },
        { id: 4, name: 'Return and refund policy', link: '/return-and-refund-policy' }
    ]

    const footerIcon = [
        { id: 1, iconName: linkedin, altText: '' },
        { id: 2, iconName: instagram, altText: '' },
        { id: 3, iconName: fb, altText: '' },
        { id: 4, iconName: linkedin, altText: '' }
    ]
    return (
        <footer>
            <div className="footerBgColor text-center py-5">
                <div className="pb-8">
                    <span className="text-2xl font-semibold text-center mb-4" >Register for News Updates</span>
                    <div className="pt-5 flex-col lg:flex-row">
                        <input className="footerInput" type="text" placeholder="Name" />
                        <input className="footerInput my-2 lg:my-0" type="email" placeholder="Email Address*" />
                        <button className="uppercase text-white bg-black px-7   py-3">Submit</button>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="footerSectionTwo">
                    <img className="w-1/3 md:w-1/5 m-auto" src={logo} alt='' />
                    <div className="footerTextContainer flex flex-col md:block">
                        {
                            footerText.map(data => <Link
                                key={data.id}
                                to={data.link}
                                className="footerTextConditions  md:text-xl font-semibold py-1 md:p-5">
                                {data.name}</Link>)
                        }
                    </div>
                </div>
                {/* <hr /> */}
                <div className="flex justify-center pt-5 ">
                    {
                        footerIcon.map(data => <img
                            key={data.id}
                            className="footerIcon"
                            src={data.iconName}
                            alt={data.altText} />)
                    }
                </div>
            </div>
            <div className="footerBlow text-center text-base lg:text-xl py-5">
                <span>Onlineblanket.com.2023 </span>
                <span className="footerBlowText">All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;