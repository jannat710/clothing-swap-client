import axios from "axios";


const axiosOpen = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {
    return axiosOpen;
};
export default useAxios;