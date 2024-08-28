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

  const [countPage, setCountPage] = useState(1);

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

  // pagination

  const handlePage = (event, value) => {
    setCountPage(value);
  };
  const productsPerPage = 10; // Define the number of products per page

  const getAllProductAPI = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
    (countPage - 1) * productsPerPage
  }`;
  const getAllProduct = async () => {
    try {
      const res = await axios.get(getAllProductAPI);
      // console.log(res.data.products);
      setAllProduct(res.data.products);
    } catch (error) {}
  };

  useEffect(() => {
    getAllProduct();
  }, [countPage]);

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
    searchProduct,
    setSearchProduct,
    handleFilter,
    handleSearch,
    handlePage,
    countPage,
  };

  return (
    <ProductFetchingContext.Provider value={allValues}>
      {children}
    </ProductFetchingContext.Provider>
  );
};
