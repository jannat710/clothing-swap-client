import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from '../../assets/images/b1.jpg'
import b2 from '../../assets/images/b2.jpg'
import b3 from '../../assets/images/b3.jpg'
import b4 from '../../assets/images/b4.jpg'
import b5 from '../../assets/images/b5.jpeg'
import b6 from '../../assets/images/b6.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="py-10">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-56' src={b1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56' src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56' src={b3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56' src={b4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56' src={b5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56' src={b6} alt="" /></SwiperSlide>
      </Swiper>

        </div>
    );
};

export default Slider;