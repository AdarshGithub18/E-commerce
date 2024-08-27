import React from 'react';
import slide1 from '../../assets/slide-1.webp';
import slide2 from '../../assets/hero4.png';
import slide3 from '../../assets/mobile-banner.jpg';
const Hero = () => {
  return (
    <>
      <div>
        <div className="mx-5 mt-5 mb-14 ">
          <img
            src={slide1}
            className="rounded-xl hidden md:block object-cover"
            alt=""
          />
          <img
            src={slide3}
            className="rounded-xl md:hidden block object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
