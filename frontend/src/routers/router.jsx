import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router =  createBrowserRouter([
    {
        path : '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <h1 className="text-black">Home</h1>,
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