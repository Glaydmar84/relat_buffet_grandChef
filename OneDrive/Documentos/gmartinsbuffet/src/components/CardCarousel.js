import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FlipCard from './CardFlip';
import { cardsData } from '../data/CardsData';

const CardCarousel = () => {
  return (
    <div className="abslute carousel-container w-full h-full mt-4 overflow-hidden flex flex-col items-center">
      <p className="absolute text-3xl mb-4 pb-4 text-white font-bold">Bem Vindo</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1020: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full max-w-[1500px] px-6"
      >
        {cardsData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex justify-center">
              <div className="w-[280px] sm:w-[320px] md:w-[290px] h-[429px]">
                <FlipCard data={data} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
