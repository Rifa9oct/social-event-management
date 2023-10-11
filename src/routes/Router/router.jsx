import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Supports from "../../pages/Supports/Supports";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../../pages/About/About";
import Home from "../../pages/HomeContainer/Home/Home";
import ServiceDetail from "../../pages/HomeContainer/ServiceContainer/ServiceDetail/ServiceDetail";

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
                element:<About></About>
            },
            {
                path: "/contact",
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: "/supports",
                element:<PrivateRoute><Supports></Supports></PrivateRoute>
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
                path:"/service/:id",
                loader:() => fetch('/fakeData.json'),
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            }
        ]
    },
])

export default router;