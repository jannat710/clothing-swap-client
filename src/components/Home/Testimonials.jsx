import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';




// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
  }, [])
  return (
    <div>
      {testimonials.length}length
      <div className="font-semibold text-3xl mx-20">
        <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">Customer Testimonials</span></h3>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
            <div className="py-10 flex flex-col justify-center items-center">
              <img className="h-16 w-16 rounded-full" src={testimonial.image} alt="" />
              <Rating
                style={{ maxWidth: 180 }}
                value={testimonial.rating}
                readOnly
              />
              <h1 className='font-bold py-3 text-lg'>{testimonial.name}</h1>
              <p>{testimonial.review}</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;