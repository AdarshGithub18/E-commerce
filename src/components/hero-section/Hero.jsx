import slide1 from '../../assets/hero-images/slide-1.webp';
import slide2 from '../../assets/hero-images/mobile-banner.jpg';

const Hero = () => {
  return (
    <>
      <div>
        <div className="mx-5 mt-5 mb-14 relative ">
          <img
            src={slide1}
            className={`rounded-xl hidden md:block object-cover`}
            alt=""
          />

          {/* banner for small devices */}
          <img
            src={slide2}
            className="rounded-xl md:hidden block object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
