import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

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
                element: <h1 className="text-black">Order</h1>,
            },
            {
                path: '/about',
                element: <h1 className="text-black">About</h1>,
            },
        ]
    },
]);

export default router;