import React from 'react';
import { Link } from 'react-router-dom';
import people from "../../assets/images/icon/pp.png"
import navLogo from "../../assets/images/logo/ONLINE-BLANKET-LOGO.jpg"

const AdminNav = () => {
    return (
        <div className="px-9 bg-slate-50 py-2 flex justify-between items-center">
            <Link to={"/"}>
                <img className="w-24" src={navLogo} alt="" />
            </Link>
            <Link to={'/login'}><img className="w-8" src={people} alt="" /></Link>
        </div>
    );
};

export default AdminNav;