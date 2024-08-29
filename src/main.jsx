import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import AllProducts from './pages/all-products/AllProducts.jsx';
import SingleProduct from './pages/single-product/SingleProduct.jsx';
import ContactUs from './pages/contact/ContactUs.jsx';
import AboutUs from './pages/about/AboutUs.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/all-products',
        element: <AllProducts />,
      },
      {
        path: '/single-product/:productID',
        element: <SingleProduct />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
