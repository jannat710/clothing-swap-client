import { Helmet } from "react-helmet-async";


const MySchedule = () => {
    return (
        <div>
            <Helmet><title>ClothingSwap | My Schedules</title></Helmet>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">My Services</span></h3>
            </div>

        </div>
    );
};

export default MySchedule;