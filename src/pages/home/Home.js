import React from 'react';
import './Home.css'
import Hero from '../../components/hero/Hero';
import Look from '../../components/look/Look';
import Feel from '../../components/feel/Feel';
import ProductComponent from '../../shared/productComponent/ProductComponent';

const Home = () => {
    return (
        <div>
            <Hero />
            <Look />
            <ProductComponent
                title="New products"
                description="Discover more."
                descriptionSpan="Good things are waiting for you" />
            <ProductComponent
                title="Best seller"
                description="Best Selling of the"
                descriptionSpan="month" />
            <Feel />
            <ProductComponent
                title="Featured product"
                description="Don't miss out the"
                descriptionSpan="products" />
        </div>
    );
};

export default Home;