import React from 'react';
import s1 from '../../assets/service-icons/shipped.png';
import s2 from '../../assets/service-icons/authenticity.png';
import s3 from '../../assets/service-icons/exchange.png';
import s4 from '../../assets/service-icons/credit-card.png';

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
              className="py-3 px-5 rounded-xl border border-gray-700 text-center flex flex-col items-center gap-4 w-44 md:w-56"
            >
              <img src={item.icon} width={60} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
