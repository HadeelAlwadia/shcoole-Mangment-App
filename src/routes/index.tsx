import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/register";
import Requests from "../pages/user/Requests";
import Home from "../pages/home";
import Products from "../pages/admin/products";
import Users from "../pages/admin/users";
import Profile from "../pages/user/Profile";
import Error from "../pages/error";


export const routes = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/auth/login', element: <Login /> },
    { path: '/auth/register', element: <Register /> },
    { path: '/:userId/profile', element: <Profile /> },
    { path: '/:userId/requests', element: <Requests /> },
    { path: '/:userId/users', element: <Users /> },
    { path: '/:userId/products', element: <Products /> },
    { path: '*', element: <Error/> }




]

)