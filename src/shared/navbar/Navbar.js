import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import fb from "../../assets/images/homepage slicing/fb.png"
import instagram from "../../assets/images/homepage slicing/instagram.png"
import linkedin from "../../assets/images/homepage slicing/linkedln.png"
import navLogo from "../../assets/images/logo/ONLINE-BLANKET-LOGO.jpg"
import people from "../../assets/images/icon/pp.png"
import cart from "../../assets/images/icon/cart.png"
import { FaAlignJustify } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openShop, setOpenShop] = useState(false);

    const handleMouseEnter = () => {
        setOpenShop(true);
    };

    const handleMouseLeave = () => {
        setOpenShop(false);
    };

    const shopData = [
        { id: 1, name: 'Quilt', link: '/shop/quilt' },
        { id: 1, name: 'Soft Blanket', link: '/shop/soft-blanket' },
        { id: 1, name: 'Super Soft Blanket', link: '/shop/super-soft-blanket' },
        { id: 1, name: 'Comforter', link: '/shop/comforter' },
        { id: 1, name: 'Baby Blanket', link: '/shop/baby-blanket' },
    ]


    const menuItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About us', link: '/about' },
        // { id: 3, name: 'Shop', link: '/shop' },
        { id: 4, name: 'Contact us', link: '/contact' }
    ]


    return (
        <>
            <div className="header px-9 py-3 lg:py-5 flex flex-col md:flex-row justify-center items-center md:justify-between">
                <span className="uppercase text-center text-sm lg:text-base text-white tracking-wider">Welcome to online blanket</span>
                <div className='flex justify-center pt-1 lg:pt-0'>
                    <img src={fb} alt="facebook logo" />
                    <img className="px-2" src={instagram} alt="instagram logo" />
                    <img src={linkedin} alt="linkedin logo" />
                </div>
            </div>
            <div className="px-9 py-2 flex justify-between items-center">
                <Link to={"/"}>
                    <img className="w-24" src={navLogo} alt="" />
                </Link>

                <div className="lg:hidden flex items-center">
                    <button onClick={() => setOpenMenu(!openMenu)} className="text-black font-semibold">
                        <FaAlignJustify />
                    </button>
                </div>
                {
                    openMenu && <div className="absolute top-28 left-1/2 w-36 bg-white shadow-lg z-50">
                        {
                            menuItems.map(data => <NavLink
                                key={data.id}
                                to={data.link}
                                className="block text-black font-semibold px-4 py-2"
                                activeClassName=""
                                exact={data.link === '/'}>
                                {data.name}
                            </NavLink>)
                        }
                    </div>
                }
                <div className="uppercase flex items-center">
                    {menuItems.map((data) => (
                        <NavLink
                            key={data.id}
                            to={data.link}
                            className="text-black font-semibold px-4 hidden lg:block"
                            activeClassName="active"
                            exact={data.link === '/'}
                            onClick={() => setOpenMenu(false)}>
                            {data.name}
                        </NavLink>
                    ))}
                    <div className="relative">
                        <NavLink
                            to={'/shop'}
                            className="block text-black font-semibold px-4 py-3"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Shop
                        </NavLink>

                        <div className={`absolute top-full left-0  w-48 bg-white shadow-lg z-50 ${openShop ? 'block' : 'hidden'}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {shopData.map((data) => (
                                <NavLink
                                    key={data.id}
                                    to={data.link}
                                    className="block text-black text-sm cartText border-b font-semibold px-3 py-3"
                                    activeClassName=""
                                    exact={data.link === '/'}
                                >
                                    {data.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex">
                        <Link to={'login'}><img className="w-8" src={people} alt="" /></Link>
                        <Link to={'/cart'}><img className="w-8" src={cart} alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;