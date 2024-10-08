import React, { useEffect } from 'react';
import Hero from '../../components/hero-section/Hero';
import TopCategories from '../../components/top-categories/TopCategories';
import Service from '../../components/services/Service';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
  //changing the page title
  useEffect(() => {
    document.title = 'Welcome to UrbanCart';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <section>
        <Hero />
        <TopCategories />
        <Gallery />
        <Service />
      </section>
    </>
  );
};

export default Home;
