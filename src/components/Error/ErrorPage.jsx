import { Link } from 'react-router-dom';
import errorpic from '../../assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <img className='h-1/3 w-1/3 mx-auto' src={errorpic} alt="" />
            <h1 className='text-center'>404-PAGE NOT FOUND</h1>
            <p className='py-5 text-center'>The page you are looking for might have been removed <br></br>had its name changed or is temporary unavailable</p>
            <button className='btn btn-primary flex justify-center items-center mx-auto'><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;