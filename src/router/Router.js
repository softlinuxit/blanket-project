import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import Contact from "../pages/contact/Contact"
import About from "../pages/About";
import TermsAndConditions from "../pages/policy/TermsAndConditions";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import ShippingPolicy from "../pages/policy/ShippingPolicy";
import ReturnAndRefund from "../pages/policy/ReturnAndRefund";
import SoftBlanket from "../components/shop/SoftBlanket";
import QuiltShop from "../components/shop/QuiltShop";
import SuperSoftBlanket from "../components/shop/SuperSoftBlanket";
import BabyBlanket from "../components/shop/BabyBlanket";
import Comforter from "../components/shop/Comforter";
import Cart from "../pages/cart/Cart";
import Shop from "../pages/Shop";
import Checkout from "../pages/checkout/Checkout";
import Login from "../pages/login/Login";
import ProductDetail from "../components/productDetail/ProductDetail";
import Register from "../pages/login/Register";
import LoginPage from "../pages/login/LoginPage";
import Admin from "../pages/admin/Admin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />

            },
            {
                path: 'shop',
                element: <Shop />

            },
            // {
            //     path: 'admin',
            //     element: <Admin />
            // },
            {
                path: '/shop/quilt',
                element: <QuiltShop />,
            },
            {
                path: '/shop/soft-blanket',
                element: <SoftBlanket />,
            },
            {
                path: '/shop/super-soft-blanket',
                element: <SuperSoftBlanket />,
            },
            {
                path: '/shop/comforter',
                element: <Comforter />,
            },
            {
                path: '/shop/baby-blanket',
                element: <BabyBlanket />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/products/:id',
                element: <ProductDetail />,
            },
            {
                path: 'terms-and-conditions',
                element: <TermsAndConditions />
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />

            },
            // {
            //     path: '/login',
            //     element: <LoginPage />,
            // },
            // {
            //     path: '/register',
            //     element: <Register />,
            // },
            {
                path: 'shipping-policy',
                element: <ShippingPolicy />

            },
            {
                path: 'return-and-refund-policy',
                element: <ReturnAndRefund />

            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/admin',
        element: <Admin />
    }
]);

export default router;