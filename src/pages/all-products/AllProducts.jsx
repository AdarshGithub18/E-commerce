import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import SelectCategory from '../../components/allproducts/SelectCategory';
import ProductCard from '../../components/allproducts/ProductCard';
import ProductsCard from '../../components/allproducts/ProductsCard';
import SearchBar from '../../components/allproducts/SearchBar';

const AllProducts = ({ addToCart }) => {
  const [categories, setCategories] = useState([]); //storing categories data in the dropdown filter
  const [product, setProduct] = useState([]); // storing filtered categories products
  const [allProduct, setAllProduct] = useState([]); // storing all default products for the all-products page

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryProduct, setShowCategoryProduct] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');

  //changing the page title
  useEffect(() => {
    document.title = 'All Products | UrbanCart';
  }, []);

  // Fetching all categories data for dropdown
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

  // **********************************************************************************//

  // all products data it will give 30 products for the all-products page

  const getAllProductAPI = 'https://dummyjson.com/products';
  const getAllProduct = async () => {
    try {
      const res = await axios.get(getAllProductAPI);
      // console.log(res.data.products);
      setAllProduct(res.data.products);
    } catch (error) {}
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
  const getSelectedProductData = async () => {
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
    getSelectedProductData();
  }, [selectedCategory]);

  // handle search

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchProduct(query);

    const searchItem = allProduct.filter((item) => {
      return item.title.toLowerCase().includes(searchProduct.toLowerCase());
    });

    setAllProduct(searchItem);

    console.log(query);
  };

  return (
    <Layout>
      <SelectCategory categories={categories} handleFilter={handleFilter} />
      <SearchBar handleSearch={handleSearch} searchProduct={searchProduct} />

      {showCategoryProduct ? (
        // its showing filtered products by dropdown
        <ProductCard product={product} />
      ) : (
        // its showing product for the all products page
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
