import slider1 from '../../assets/images/s1.jpg';
import slider2 from '../../assets/images/s2.jpg';
import slider3 from '../../assets/images/s3.jpg';
import slider4 from '../../assets/images/s4.jpg';

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full h-[80vh] bg-black opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute' >
                    <h1 className='text-center pt-12 md:pt-24 lg:pt-36 '>Clothing Swap</h1>
                    <p className='text-center'>A clothing swap is like a fashion fiesta where you and your stylish pals gather to trade your pre-loved garments for some fabulous new finds. Its a great way to revamp your wardrobe while being eco-friendly!</p>
                    <button className='btn flex justify-center items-center mx-auto'>Donate</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full h-[80vh] bg-black opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full h-[80vh] bg-black opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full h-[80vh] bg-black opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;