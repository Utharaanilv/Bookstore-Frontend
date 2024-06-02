import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Shop from "../Pages/Shop";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import Upload from "../Dashboard/Upload";
import Manage from "../Dashboard/Manage";
import Edit from "../Dashboard/Edit";
import BookView from "../Pages/BookView";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LandingPage from "../Pages/LandingPage";
import Cart from "../Pages/BookCart";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
              path:"/",
              element:<LandingPage/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
           {
            path:"/bookview/:id",
            element:<BookView/>
           },
           {
            path:"/login",
            element:<Login/>
           },
           {
            path:"/register",
            element:<Register/>
           },
           {
            path:"/cart",
            element:<Cart/>
           }
        ]
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/admin/dashboard/upload",
                element:<Upload/>
            },
           
            {
                path:"/admin/dashboard/Manage",
                element:<Manage/>
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<Edit/>,
               
            }
        ]
    }
])
export default router