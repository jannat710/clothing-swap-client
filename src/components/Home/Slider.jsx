import slider1 from '../../assets/images/s1.jpg';
import slider2 from '../../assets/images/s2.jpg';
import slider3 from '../../assets/images/s3.jpg';
import slider4 from '../../assets/images/s4.jpg';

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                <img src={slider1} className="w-full h-[80vh] bg-black opacity-50" />
                <div className='absolute'>
                    <h1 className='text-center text-4xl font-bold'>Clothing Swap</h1>
                    <p className='text-center text-lg font-normal py-5'>A clothing swap is like a fashion fiesta where you and your stylish pals gather to trade your pre-loved garments <br /> for some fabulous new finds. Its a great way to revamp your wardrobe while being eco-friendly!</p>
                    <button className='btn bg-black text-white border-none btn-md px-5 flex justify-center items-center mx-auto'>Donate</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
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