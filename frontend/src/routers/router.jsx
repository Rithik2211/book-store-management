import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Order from "../components/Order";
import Checkout from "../components/Checkout";
import ShoppingCart from "../components/ShoppingCart";
import Login from "../components/Login";
import Register from "../components/Register";
import BookCard from "../components/BookCard";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardHome from "../components/Admin/DashboardHome";
import AdminDashboard from "../components/Admin/AdminDashboard";
import ManageBooks from "../components/Admin/ManageBooks";
import AddBooks from "../components/Admin/AddBooks";
import DashboardHistory from "../components/Admin/DashboardHistory";
import DashboardCollections from "../components/Admin/DashboardCollections";
import EditBook from "../components/Admin/EditBook";

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
                element: <PrivateRoute><Order /></PrivateRoute>,
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>,
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
            },
            {
                path: '/bookCard/:id',
                element: <BookCard />,
            },
        ]
    },
    {
        path : '/admin',
        element :<AdminLogin />,
        errorElement: <ErrorPage />,
        children : [

        ]
    },
    {
        path: '/dashboard',
        element : <AdminRoute><AdminDashboard /></AdminRoute>,
        errorElement : <ErrorPage />,
        children : [
            {
                path : "",
                element : <AdminRoute><DashboardHome /></AdminRoute>,
            },
            {
                path : "add-new-book",
                element : <AdminRoute><AddBooks /></AdminRoute>,
            },
            {
                path : "orders",
                element : <AdminRoute><DashboardCollections /></AdminRoute>,
            },
            {
                path : "history",
                element : <AdminRoute><DashboardHistory /></AdminRoute>,
            },
            {
                path : "edit-book/:id",
                element : <AdminRoute><EditBook /></AdminRoute>,
            },
            {
                path : "manage-books",
                element : <AdminRoute><ManageBooks /></AdminRoute>,
            },
        ]
    }
]);

export default router;