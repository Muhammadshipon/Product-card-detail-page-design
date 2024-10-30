
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../App.css';
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


const RelatedProducts = () => {
  return (
    <>
      <h3 className='text-center font-bold text-3xl mb-8 '>Related products</h3>
    <Swiper
      slidesPerView={4.5}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper mb-10 pb-10"
      breakpoints={{
        // Small screens (e.g., mobile devices)
        0: {
          slidesPerView: 2,
          spaceBetween: 10, // Adjust as needed
        },
        // Medium screens and above (e.g., tablets)
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // Large screens (e.g., desktops)
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide className=' h-[200px] '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTprhHLkKk0k0NWtIWLpmXABqpnytENWoTw&s" alt="tv" className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHKqqTEaX-ME14nR7dJMIsVhXOH6lGM6tVg&s" alt=""   className='w-full  h-[200px] bg-cover'/>
      </SwiperSlide>
     
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYed-gHvYZ5qsUtKUqNSYuQrNCwZxx1zZdw&s" alt=""  className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KTpgSeu7A_WhWcuV-2GUzTsXDb3aVn8i7-s4GzWHW9R1fF85xrjOiOfWb5IhG5UDRMY&usqp=CAU" alt=""   className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EQHexpCjUQbq7-FMVvpkkSJxWFi37F1eAw&s" alt=""   className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hz6oOL_O7DkhMiyt1QHgX7MJjNDKOZbIdg&s" alt=""   className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      <SwiperSlide className=' h-[200px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V-pDq65_35hK3iavKRGH518RzGxWPMu2mg&s" alt=""   className='w-full  h-[200px] bg-cover' />
      </SwiperSlide>
      
    
    </Swiper>
  </>
  );
};

export default RelatedProducts;





