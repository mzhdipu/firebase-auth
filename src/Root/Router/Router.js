import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Components/Pages/Home/Home";
import About from "../../Components/Pages/About/About";
import Contact from "../../Components/Pages/Contact/Contact";
import NotFound from "../../Components/Pages/NotFound/NotFound";
import Login from "../../Components/Pages/Authentication/Login/Login";
import Registration from "../../Components/Pages/Authentication/Registration/Registration";
import ForgetPassword from "../../Components/Pages/Authentication/ForgetPassword/ForgetPassword";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            },
            
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])