import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Supports from "../pages/Supports/Supports";
import Service from "../pages/Home/Service/Service";
import ServiceDetail from "../pages/Home/ServiceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Advantages from "../pages/Home/Advantages/Advantages";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/about",
                element:<AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/supports",
                element:<PrivateRoute><Supports></Supports></PrivateRoute>
            },
            {
                path: "/service",
                element:<Service></Service>
            },
            {
                path: "/serviceDetail",
                element:<ServiceDetail></ServiceDetail>
            },
            {
                path:"/advantage",
                element:<Advantages></Advantages>
            }
        ]
    },
])

export default router;