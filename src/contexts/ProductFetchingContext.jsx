import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const ProductFetchingContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); //storing categories data in the dropdown filter
  const [product, setProduct] = useState([]); // storing filtered categories products
  const [allProduct, setAllProduct] = useState([]); // storing all default products for the all-products page

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryProduct, setShowCategoryProduct] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [searchFilteredProduct, setSearchFilteredProduct] = useState([]);

  //changing the page title

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

  const getAllProductAPI = `https://dummyjson.com/products?limit=0`;
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

  // handle search filter

  const handleSearch = () => {
    const filter = allProduct.filter((item) => {
      return item.category.toLowerCase().includes(searchProduct.toLowerCase());
    });
    setSearchFilteredProduct(filter);
    console.log(filter);
  };

  const allValues = {
    categories,
    setCategories,
    product,
    setProduct,
    allProduct,
    setAllProduct,
    selectedCategory,
    setSelectedCategory,
    showCategoryProduct,
    setShowCategoryProduct,
    handleFilter,
    setSearchProduct,
    handleSearch,
    searchProduct,
    searchFilteredProduct,
  };

  return (
    <ProductFetchingContext.Provider value={allValues}>
      {children}
    </ProductFetchingContext.Provider>
  );
};
