
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/loadingAnimation.json'
import useAuth from "../hook/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div><Lottie className="h-96 w-96 mx-auto" animationData={loadingAnimation}></Lottie></div>;
    }

    if (!loading && !user?.email) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;

    }


    return children;

};

export default PrivateRoute;