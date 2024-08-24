import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero-section/Hero';
import TopCategories from '../../components/top-categories/TopCategories';
import Service from '../../components/services/Service';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <TopCategories />
        <Gallery />
        <Service />
      </Layout>
    </>
  );
};

export default Home;
