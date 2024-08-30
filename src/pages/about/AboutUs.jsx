import React, { useEffect, useState } from 'react';
import missionImage from '../../assets/mission4.jpg';
import aboutImage from '../../assets/aboutus.jpg';

import s1 from '../../assets/service-icons/cart1.png';
import s2 from '../../assets/service-icons/shopping.png';
import s3 from '../../assets/service-icons/customer-support.png';
import s4 from '../../assets/service-icons/return.png';
import s5 from '../../assets/service-icons/fast-shipping.png';
import { GoPlus } from 'react-icons/go';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.title = 'About Us | UrbanCart';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const services = [
    {
      title: 'Wide Product Range',
      description:
        'From fashion to electronics, we offer a variety of products to cater to all your needs.',
      icon: s1,
    },
    {
      title: 'Secure Shopping',
      description:
        'We prioritize your security with top-notch payment and data protection systems.',
      icon: s2,
    },
    {
      title: 'Customer Support',
      description:
        'Our customer service team is available 24/7 to assist you with any queries or concerns.',
      icon: s3,
    },
    {
      title: 'Easy Returns',
      description:
        'Enjoy a hassle-free return policy for a satisfying shopping experience.',
      icon: s4,
    },
    {
      title: 'Fast Shipping',
      description: 'We ensure quick and reliable delivery to your doorstep.',
      icon: s5,
    },
  ];

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, simply browse our products, add your chosen items to the cart, and proceed to checkout. Follow the prompts to complete your purchase.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment gateways.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your order on our website.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto p-5">
      {/* What Are We Section */}
      <section className="my-14">
        <h2 className="text-3xl font-semibold  text-center mb-6">
          What Are We?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:mx-12">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full md:w-1/2 max-w-xl h-auto rounded-lg shadow-md"
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
      <section className="my-14">
        <h2 className="text-3xl font-semibold text-center  mb-6">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:mx-12">
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full md:w-1/2 max-w-xl h-auto rounded-lg shadow-md"
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
      <section className="my-14">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-black rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                className=" h-12 w-12 mb-4"
                src={service.icon}
                alt={service.title}
              />
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm ">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/*FAQ section */}

      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow-sm"
              >
                <button
                  className="w-full text-left text-lg flex items-center justify-between  text-gray-700 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}{' '}
                  <span>
                    <GoPlus />
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
