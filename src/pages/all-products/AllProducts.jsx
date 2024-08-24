import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import SelectCategory from '../../components/allproducts/SelectCategory';
import ProductCard from '../../components/allproducts/ProductCard';

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetching all categories data
  const categoriesAPI = 'https://dummyjson.com/products/categories';
  const getCategoriesData = async () => {
    try {
      const res = await axios.get(categoriesAPI);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getProductData = async () => {
    if (selectedCategory) {
      const productAPI = `https://dummyjson.com/products/category/${selectedCategory.slug}`;
      try {
        const res = await axios.get(productAPI);
        setProduct(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getProductData();
  }, [selectedCategory]);

  const handleFilter = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <div>All Products</div>
      <SelectCategory categories={categories} handleFilter={handleFilter} />
      <ProductCard product={product} />
    </Layout>
  );
};

export default AllProducts;
