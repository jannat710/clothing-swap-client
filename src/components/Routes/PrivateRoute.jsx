import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/loadingAnimation.json'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div> <Lottie className="h-1/3 w-1/3 mx-auto" animationData={loadingAnimation}></Lottie>
        </div>;
    }

    if (!loading && !user?.email) {
        return <Navigate to='/login'></Navigate>;

    }


    return children;
};

export default PrivateRoute;