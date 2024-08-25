import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import SelectCategory from '../../components/allproducts/SelectCategory';
import ProductCard from '../../components/allproducts/ProductCard';
import ProductsCard from '../../components/allproducts/ProductsCard';

const AllProducts = ({ addToCart }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allProduct, setAllProduct] = useState([]);
  const [showCategoryProduct, setShowCategoryProduct] = useState(false);

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

  // all products data

  const getAllProductAPI = 'https://dummyjson.com/products';
  const getAllProduct = async () => {
    const res = await axios.get(getAllProductAPI);
    // console.log(res.data.products);
    setAllProduct(res.data.products);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  // filtering product according to selected category

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setShowCategoryProduct(true);
  };

  // fetching selected product data
  const getProductData = async () => {
    if (selectedCategory) {
      const productAPI = `https://dummyjson.com/products/category/${selectedCategory}`;
      try {
        const res = await axios.get(productAPI);
        // console.log(res.data.products);
        setProduct(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getProductData();
  }, [selectedCategory]);

  return (
    <Layout>
      <SelectCategory categories={categories} handleFilter={handleFilter} />

      {showCategoryProduct ? (
        <ProductCard product={product} />
      ) : (
        <div className="grid grid-cols-2 my-10 md:grid-cols-5 gap-5 px-4">
          {allProduct.map((productsItem) => {
            return (
              <>
                <ProductsCard
                  productsItem={productsItem}
                  addToCart={addToCart}
                />
              </>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default AllProducts;
