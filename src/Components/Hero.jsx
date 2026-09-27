import React from "react";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import First from "../assets/First.jpg";
import Second from "../assets/Second.jpg";
import Third from "../assets/Third.jpg";
// import { Locate } from "lucide-react";
import { Search, Locate } from "lucide-react";

const Hero = () => {
  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <div className="relative min-h-screen">
            <div
              className="absolute inset-0 w-full h-full "
              style={{
                backgroundImage: `url(${First})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0  bg-black opacity-60" />
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">Discover your Adventure</h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">Explore breathtaking destination,create unforgetable memories,and embrack on the journey of a lifetime</p>
                  <button className="bg-cyan-500 px-3 py-2 text-white rounded-md font-semibold">Start Exploring</button>
                </div>
              </div>
            </div>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
              <div className="relative min-h-screen">
            <div
              className="absolute inset-0 w-full h-full "
              style={{
                backgroundImage: `url(${Second})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0  bg-black opacity-60" />
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">Discover your Adventure</h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">Explore breathtaking destination,create unforgetable memories,and embrack on the journey of a lifetime</p>
                  <button className="bg-cyan-500 px-3 py-2 text-white rounded-md font-semibold">Start Exploring</button>
                </div>
              </div>
            </div>
            
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
              <div className="relative min-h-screen">
            <div
              className="absolute inset-0 w-full h-full "
              style={{
                backgroundImage: `url(${Third})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0  bg-black opacity-60" />
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">Discover your Adventure</h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">Explore breathtaking destination,create unforgetable memories,and embrack on the journey of a lifetime</p>
                  <button className="bg-cyan-500 px-3 py-2 text-white rounded-md font-semibold">Start Exploring</button>
                </div>
              </div>
            </div>
            
          </div>
        </SwiperSlide>

      </Swiper>
      

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:block w-[1050px] bg-white border border-gray-300 shadow-lg rounded-xl p-6 z-10">
        <div className="flex items-end justify-between gap-6">

          {/* Location */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="flex items-center gap-2 font-semibold">
              <Locate className="w-4 h-4" />
              <span>Location</span>
            </label>

            <select className="h-10 border border-gray-300 rounded-md px-3">
               <option value="">Select Options</option>
               <option value="">Bali</option>
               <option value="">India</option>
               <option value="">Tokyo</option>
               <option value="">Venice</option>
               <option value="">Paris</option>
            </select>
          </div>

          {/* Check In */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="font-semibold">Check In</label>

            <input
              type="date"
              className="h-10 border border-gray-300 rounded-md px-3"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="font-semibold">Check Out</label>

            <input
              type="date"
              className="h-10 border border-gray-300 rounded-md px-3"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="flex items-center gap-2 font-semibold">
              <Search className="w-4 h-4" />
              <span>Guests</span>
            </label>

            <select className="h-10 border border-gray-300 rounded-md px-3">
              <option>Select Guests</option>
              <option>2 Guests, 1 Child</option>
              <option>2 Guests, 2 Children</option>
              <option>2 Guests, 3 Children</option>
              <option>4 Guests</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex flex-col">
            <label className="opacity-0">Button</label>

            <button className="h-10 px-6 bg-cyan-500 text-white rounded-md font-semibold transition-all duration-300 hover:bg-black">
              Book Now
            </button>
          </div>

  </div>
</div>
    </div>
  );
};

export default Hero;