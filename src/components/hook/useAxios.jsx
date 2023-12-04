import axios from "axios";


const axiosOpen = axios.create({
    baseURL: 'https://clothing-swap-server.vercel.app'
})

const useAxios = () => {
    return axiosOpen;
};
export default useAxios;