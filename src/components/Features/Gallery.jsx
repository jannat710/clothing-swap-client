import Marquee from "react-fast-marquee";
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2.jpg'
import photo3 from '../../assets/images/photo3.jpg'
import photo4 from '../../assets/images/photo4.jpg'
import photo5 from '../../assets/images/photo5.jpg'
import photo6 from '../../assets/images/photo6.jpg'
import photo7 from '../../assets/images/photo7.jpg'

const Gallery = () => {
    return (
        <div>
            <div className="font-semibold text-3xl mx-20">
                <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">View Gallery</span></h3>
            </div>
            <p className="text-center pb-5">Welcome to our photo gallery! Explore the stunning collection of clothing swap<br /> moments captured in these pictures.</p>
            <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true}>
                <div className="flex gap-6">
                    
                        <img className="h-52 w-40 rounded-sm" src={photo1} alt="" />                   
                        <img className="h-52 w-40 rounded-sm" src={photo2} alt="" />                   
                        <img className="h-52 w-40 rounded-sm" src={photo3} alt="" />                  
                        <img className="h-52 w-40 rounded-sm" src={photo4} alt="" />                  
                        <img className="h-52 w-40 rounded-sm" src={photo5} alt="" />
                        <img className="h-52 w-40 rounded-sm" src={photo6} alt="" />                 
                        <img className="h-52 w-40 rounded-sm" src={photo7} alt="" />
                       
                </div>
            </Marquee>

        </div>
    );
};

export default Gallery;