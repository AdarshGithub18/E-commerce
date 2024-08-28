import React, { useEffect, useState } from 'react';
import slide1 from '../../assets/hero-images/slide-1.webp';
import slide2 from '../../assets/hero-images/laptop-banner001.jpg';
import slide3 from '../../assets/hero-images/laptop-banner.jpg';
import slide4 from '../../assets/hero-images/mobile-banner.jpg';
import slide5 from '../../assets/hero-images/samsung-banner.jpg';
import slide6 from '../../assets/hero-images/washing-machine-banner.webp';
import slide7 from '../../assets/hero-images/led-banner.jpg';
import { GrNext, GrPrevious } from 'react-icons/gr';
const Hero = () => {
  const [slider, setSlider] = useState(0);
  const allBanners = [slide1, slide2, slide3, slide5, slide6, slide7];

  const handlePrev = () => {
    setSlider(slider === 0 ? allBanners.length - 1 : slider - 1);
  };

  const handleNext = () => {
    setSlider(slider === allBanners.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [slider]);
  return (
    <>
      <div>
        <div className="mx-5 mt-5 mb-14 relative ">
          {allBanners.map((img, idx) => {
            return (
              <>
                <img
                  src={img}
                  className={`rounded-xl   object-cover ${
                    slider == idx ? 'md:block' : 'hidden'
                  }`}
                  alt=""
                />
                <div className=" slideBtns absolute top-[50%]  flex justify-between  text-white text-[60px] px-8 ">
                  <button onClick={handleNext}>
                    <GrPrevious />
                  </button>
                  <button onClick={handlePrev}>
                    <GrNext />
                  </button>
                </div>
              </>
            );
          })}

          {/* banner for small devices */}
          <img
            src={slide4}
            className="rounded-xl md:hidden block object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
