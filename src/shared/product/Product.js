import React from 'react';
import './Project.css'
import wishlist from '../../assets/images/homepage slicing/wishlist.png'
import wishlist2 from '../../assets/images/homepage slicing/wishlist2.png'
import cart from '../../assets/images/homepage slicing/shopping-cart.png'
import rating from '../../assets/images/homepage slicing/rating.png'
import blanket1 from '../../assets/images/homepage slicing/blanket1.png'
import blanket2 from '../../assets/images/homepage slicing/blanket2.png'
import blanket3 from '../../assets/images/homepage slicing/blanket3.png'


const Product = () => {
    const productData = [
        { id: 1, productName: 'Baby Blanket', productPrice: 'Rs.4500', productImage: blanket1, wishIcon: wishlist, cartIcon: cart, ratingIcon: rating },
        { id: 2, productName: 'Baby Blanket', productPrice: 'Rs.4500', productImage: blanket2, wishIcon: wishlist2, cartIcon: cart, ratingIcon: rating },
        { id: 3, productName: 'Baby Blanket', productPrice: 'Rs.4500', productImage: blanket3, wishIcon: wishlist2, cartIcon: cart, ratingIcon: rating },
    ]
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {
                productData.map(data => <div>
                    <div className="productImgContainer1">
                        <div className="text-end">
                            <img className="w-2/12" src={data.wishIcon} alt="" />
                        </div>
                        <img className="h-40 m-auto" src={data.productImage} alt="" />
                        <div className="text-end">
                            <img className="w-1/4" src={data.cartIcon} alt="" />
                        </div>
                    </div>
                    <div className="py-2 px-5">
                        <p className="text-lg font-bold">{data.productName}</p>
                        <div className="flex justify-between items-center py-1">
                            <p className="productPriceColor font-bold">{data.productPrice}</p>
                            <img className="w-1/4" src={data.ratingIcon} alt="" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Product;