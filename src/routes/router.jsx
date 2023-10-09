import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Supports from "../pages/Supports/Supports";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import Service from "../pages/Home/Service/Service";

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
                element:<Contact></Contact>
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
                element:<Supports></Supports>
            },
            {
                path: "/service",
                element:<Service></Service>
            },
            {
                path: "/serviceDetail",
                element:<ServiceDetail></ServiceDetail>
            },
        ]
    },
])

export default router;