import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
            path:'/about',
            element:<About></About>
        }
      ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    }
  ]);


export default router;