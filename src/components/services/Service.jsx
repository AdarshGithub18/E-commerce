import React from 'react';
import s1 from '../../assets/service-icons/shipped.webp';
import s2 from '../../assets/service-icons/authenticity.webp';
import s3 from '../../assets/service-icons/exchange.webp';
import s4 from '../../assets/service-icons/credit-card.webp';

const Service = () => {
  const services = [
    { title: 'Free Shipping', icon: s1 },
    { title: 'Authentic Products', icon: s2 },
    { title: 'Easy Returns', icon: s3 },
    { title: 'Secure Payments', icon: s4 },
  ];

  return (
    <>
      <div className="heading mx-5 my-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Our Services
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="py-3 px-5 rounded-xl border border-gray-300 text-center flex flex-col items-center gap-4 w-36 sm:w-40 md:w-44 lg:w-56 bg-white shadow-sm transition-transform transform hover:scale-105"
            >
              <img src={item.icon} className="w-16 h-16" alt={item.title} />
              <p className="text-sm md:text-base font-medium text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
