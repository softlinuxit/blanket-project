import React from 'react';
import './contactAbout.css'
import blanket from '../../assets/images/homepage slicing/blanket1.png'

const ContactAbout = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-10 lg:px-20">
            <div className='text-center'>
                <img className="aboutImgBg rounded-full p-10" src={blanket} alt="" />
            </div>
            <div className="px-5 py-10">
                <span className="aboutTitleBg font-semibold rounded-full text-center uppercase py-3 px-9">About us</span>
                <p className="aboutTitleColor text-xl font-semibold py-3">Discover more. <span className="aboutSecondTitleSpan">Good thinks are waiting for you</span></p>
                <p className="aboutSecondTitleSpan">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae delectus. Molestiae dicta dolore id, beatae officiis commodi corrupti, nam enim fuga, ab obcaecati temporibus laboriosam tempora nobis ad inventore voluptatum? Fugit obcaecati fugiat ab a perferendis. Itaque similique quam dolorem culpa, obcaecati praesentium vel consectetur iste atque autem voluptate. Deserunt suscipit id dicta fugiat tenetur delectus maxime necessitatibus iure, eveniet eius voluptatibus exercitationem provident alias. Nesciunt odit ipsum asperiores est culpa unde soluta quae reprehenderit, distinctio commodi voluptatibus corporis minima harum ea praesentium officiis nemo explicabo, illum non quia nam ex laboriosam maxime vitae! Hic ex culpa blanditiis rem.</p>
            </div>
        </div>
    );
};

export default ContactAbout;