import React from 'react'
import Bali from "../assets/Bali.jpg";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/Venice.jpg";
import next from '../assets/next.png'
import back from '../assets/back.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Clock, Star } from 'lucide-react'

const FeatureDestination = () => {
  const destinationJson = [
    { name: 'Baliya', img: Bali, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '60,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '279,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '170,999' },
    { name: 'India', img: India, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '103,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '298,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '169,999' },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
          Featured Destinations
        </h2>

        <hr className="w-[200px] h-1 bg-cyan-500 mx-auto mb-10 border-none" />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {destinationJson.map((destination) => (
            <SwiperSlide key={destination.name}>
              <div className="overflow-hidden border shadow-lg shadow-gray-300 rounded-lg mb-5">
                <img
                  src={destination.img}
                  alt={destination.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-all duration-300"
                />

                <div className="p-4">
                  <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                    <Clock size={15} />
                    {destination.time}
                  </p>

                  <h3 className="text-xl font-bold mb-2">
                    {destination.name}
                  </h3>

                  <p className="flex items-center gap-1">
                    <Star size={18} fill="cyan" stroke="cyan" />
                    {destination.star}
                  </p>

                  <p className="text-gray-600 mt-2 mb-4">
                    Experience the beauty and culture of {destination.name}
                  </p>

                  <div className="flex gap-3">
                    <button className="px-3 py-2 bg-cyan-500 rounded-md text-white">
                      ${destination.price}
                    </button>

                    <button className="px-3 py-2 bg-black rounded-md text-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureDestination;