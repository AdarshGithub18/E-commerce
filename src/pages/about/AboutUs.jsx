import React from 'react';
import missionImage from '../../assets/mission4.jpg';
import aboutImage from '../../assets/aboutus.jpg';
import s1 from '../../assets/service-icons/shipped.webp';
import s2 from '../../assets/service-icons/cart1.png';
import s3 from '../../assets/service-icons/exchange.webp';
import s4 from '../../assets/service-icons/credit-card.webp';
const AboutUs = () => {
  const services = [
    {
      title: 'Wide Product Range',
      description:
        'From fashion to electronics, we offer a variety of products to cater to all your needs.',
      icon: s2, // You can use an appropriate icon
    },
    {
      title: 'Secure Shopping',
      description:
        'We prioritize your security with top-notch payment and data protection systems.',
      icon: s1,
    },
    {
      title: 'Customer Support',
      description:
        'Our customer service team is available 24/7 to assist you with any queries or concerns.',
      icon: '📞', // You can use an appropriate icon
    },
    {
      title: 'Easy Returns',
      description:
        'Enjoy a hassle-free return policy for a satisfying shopping experience.',
      icon: '🔄', // You can use an appropriate icon
    },
    {
      title: 'Fast Shipping',
      description: 'We ensure quick and reliable delivery to your doorstep.',
      icon: '🚚', // You can use an appropriate icon
    },
  ];

  return (
    <div className="container mx-auto p-5">
      {/* What Are We Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold underline text-center mb-6">
          What Are We?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700 leading-7">
            At UrbanCart, we believe in providing our customers with the best
            online shopping experience. Our platform is a one-stop destination
            for all your needs, from the latest fashion trends to essential
            gadgets. We are dedicated to bringing you the best products at
            competitive prices, ensuring that you enjoy a hassle-free shopping
            journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-center underline mb-6">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700 leading-7">
            Our mission is to redefine the e-commerce landscape by offering a
            diverse range of high-quality products, unparalleled customer
            service, and a seamless shopping experience. We aim to build
            long-term relationships with our customers by focusing on their
            needs and continuously improving our platform and services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-black rounded-lg p-6  flex flex-col items-center text-center"
            >
              <img className="text-5xl  mb-4" src={service.icon}></img>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
