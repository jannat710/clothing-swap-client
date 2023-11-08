import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";
import PrivateRoute from "./PrivateRoute";
import PopularServices from "../Home/PopularServices";
import MyService from "../Dashboard/MyService";
import AddService from "../Dashboard/AddService";
import MySchedule from "../Dashboard/MySchedule";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`http://localhost:5000/services`),
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
            path:'/about',
            element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
          path:'/services',
          element:<PopularServices></PopularServices>
        },
        {
          path:'/myservice',
          element:<PrivateRoute><MyService></MyService></PrivateRoute>
        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/myschedule',
          element:<PrivateRoute><MySchedule></MySchedule></PrivateRoute>
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