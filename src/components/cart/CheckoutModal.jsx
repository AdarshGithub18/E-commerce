import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import gpay from '../../assets/gpay.png';
const CheckoutModal = () => {
  const { isOpen, modalFunc } = useContext(CartContext);

  // Close the modal when the Escape key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      modalFunc();
    }
  };

  return (
    isOpen && (
      <div
        id="checkout-modal"
        tabIndex="-1"
        className="bg-black/50 fixed inset-0 z-50 flex items-center  justify-center overflow-y-auto" // This allows the entire modal to scroll
        onClick={modalFunc}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="relative p-4 w-full mx-5 md:mt-60  mt-96 md:max-w-[800px] h-auto  bg-white rounded-md shadow-md" // Removed overflow-y-auto from here
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <button
            onClick={modalFunc}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="p-1 md:p-6">
            <div className="text-left py-2">
              <p className="mb-3 text-xl md:text-2xl font-semibold leading-5 text-slate-900">
                Shopping Cart
              </p>
              <hr />
            </div>

            <div className="bg-gray-100 rounded-md flex justify-between gap-2 flex-col py-4 p-2 md:px-10">
              <h1 className="text-xl font-semibold">Order Summary</h1>
              <p className="flex justify-between">
                Original Price :<span>$1200</span>
              </p>
              <p className="flex justify-between">
                Savings :<span className="text-green-500">$1200</span>
              </p>
              <p className="flex justify-between">
                Tax :<span>$1200</span>
              </p>
              <hr />
              <h1 className="text-rounded-md font-semibold">Total : $30000</h1>
            </div>

            <div className="mt-4">
              <h1 className="text-rounded-md font-semibold">
                Delivery Details
              </h1>
            </div>
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="your-name" className="text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 outline-none "
                  placeholder="xyz@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none "
                  placeholder="12345667785"
                />
              </div>
              <div>
                <label htmlFor="address" className="text-sm">
                  Your Address
                </label>
                <textarea
                  name="address"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none "
                  placeholder="xyz apartment 342342"
                />
              </div>
              <div>
                <label htmlFor="pincode" className="text-sm">
                  Pincode
                </label>
                <input
                  name="pincode"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none"
                  placeholder="123456"
                />
              </div>
              <div>
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none "
                  placeholder="City"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="payment-method" className="text-sm">
                  Payment Method
                </label>
                <select
                  name="payment-method"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2  outline-none "
                >
                  <option value="upi">UPI</option>

                  <option value="credit-debit-card">
                    Credit or Debit Card
                  </option>
                  <option value="cash-on-delivery">Cash on Delivery</option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue to Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default CheckoutModal;
