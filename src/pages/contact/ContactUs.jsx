import React, { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us | UrbanCart';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <section className="text-gray-600  relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We would love to hear from you! Whether you have a question about
            our products, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 bg-opacity-50 rounded border  text-base outline-none text-gray-700 py-1 px-3 "
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full  rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none"
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-black border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 rounded text-lg">
                Send Message
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-gray-800"> info@urbancart.com</a>
              <p className="leading-normal my-5">
                123 UrbanCart Street, Suite 456, Los Angeles, California, 90001
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
