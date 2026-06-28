import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/First.jpg";
import banner2 from "../assets/Second.jpg";
import banner3 from "../assets/Third.jpg";

// const Hero = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   console.log(banner1);

//   return (
//     <div className="slider-container -mt-12 overflow-hidden ">
//       <Slider {...settings}>
//         <div className="-z-10">
//           <div
//             className="h-[650px] lg:h-[800px] relative -z-10 "
//             style={{
//               backgroundImage: `url(${banner1})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black opacity-60"></div>
//           </div>

//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/First.jpg";
import banner2 from "../assets/Second.jpg";
import banner3 from "../assets/Third.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative h-[650px] lg:h-[800px]"> {/* z-index hatao, relative rakho */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" /> {/* Overlay upar */}
          {/* Content yahan daalna hai */}
        </div>

        {/* Slide 2 */}
        <div className="relative h-[650px] lg:h-[800px]">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {/* Slide 3 */}
        <div className="relative h-[650px] lg:h-[800px]">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
