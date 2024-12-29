import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Home from "../pages/home";

//this fun to check user
const userinfo = localStorage.getItem('user-info');

export const routes=createBrowserRouter([
    {path:'/',element:userinfo? <Home/>:<Login/>}
]
    
)