import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Order from "../components/Order";
import Checkout from "../components/Checkout";
import ShoppingCart from "../components/ShoppingCart";
import Login from "../components/Login";
import Register from "../components/Register";

const router =  createBrowserRouter([
    {
        path : '/',
        element: <App />,
        errorElement : <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/orders',
                element: <Order />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/cart',
                element: <ShoppingCart />,
            },
            {
                path: '/about',
                element: <h1 className="text-black">About</h1>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },
]);

export default router;