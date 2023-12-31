import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';




// import required modules
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hook/useAxios';


const Testimonials = () => {
  // const [testimonials, setTestimonials] = useState([]);

  // useEffect(() => {
  //   fetch('https://clothing-swap-server.vercel.app/testimonials')
  //     .then(res => res.json())
  //     .then(data => setTestimonials(data))
  // }, [])
  const axiosOpen = useAxios();
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
        const res = await axiosOpen.get('/testimonials', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        });
        return res.data;
    }
})
console.log(testimonials)
  return (
    <div>
      <div className="font-semibold text-3xl mx-20">
        <h3 className="text-[#D11752] py-10 text-sm md:text-xl lg:text-3xl  uppercase divider divider-neutral"><span className="px-10">Customer Testimonials</span></h3>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
            <div className="py-10 flex flex-col justify-center items-center bg-[#2A2929] text-white">
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