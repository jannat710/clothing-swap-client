import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";
import PrivateRoute from "./PrivateRoute";
import MyService from "../Dashboard/MyService";
import AddService from "../Dashboard/AddService";
import MySchedule from "../Dashboard/MySchedule";
import ServiceDetails from "../Services/ServiceDetails";
// import ServiceDetails from "../Services/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/services',
        element: <Services></Services>,
        //  loader: () => fetch(`https://clothing-swap-server.vercel.app/services/656d7ec284a8dd777ea44ca5`),
      },
      {
        path:"/services-details/:id",
        element :<ServiceDetails></ServiceDetails>,
       
    },
      {
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: '/myservice',
        element: <PrivateRoute><MyService></MyService></PrivateRoute>
      },
      {
        path: '/addservice',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/myschedule',
        element: <PrivateRoute><MySchedule></MySchedule></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);


export default router;