import React from 'react';
import slide1 from '../../assets/slide-1.webp';
import slide2 from '../../assets/hero4.png';
const Hero = () => {
  return (
    <>
      <div>
        <div className="m-5 ">
          <img src={slide1} className="rounded-xl object-cover" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
