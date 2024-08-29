import React, { useEffect } from 'react';
import errorImg from '../../assets/404.svg';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigateHome = useNavigate();
  useEffect(() => {
    document.title = '404 Page Not Found !';
  }, []);
  return (
    <>
      <div className="flex justify-center flex-col h-screen text-center items-center px-2">
        <h1 className="text-xl font-bold">Looks Like You're Lost.</h1>
        <p>
          Let's get you back on track with a quick search or return to the
          homepage.
        </p>
        <img src={errorImg} className="w-[400px] h-[300px]" />
        <button
          onClick={() => navigateHome('/')}
          className="bg-black text-white px-4 py-1 rounded-md"
        >
          Go To HomePage
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
