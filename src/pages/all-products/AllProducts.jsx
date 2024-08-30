import SelectCategory from '../../components/allproducts/SelectCategory';
import ProductCard from '../../components/allproducts/ProductCard';
import ProductsCard from '../../components/allproducts/ProductsCard';
import SearchBar from '../../components/allproducts/SearchBar';
import { useContext, useEffect } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';
import LoadingCard from '../../components/loading-card/Loadingcard';

const AllProducts = () => {
  const {
    allProduct,
    showCategoryProduct,
    searchProduct,
    searchFilteredProduct,
  } = useContext(ProductFetchingContext);

  useEffect(() => {
    document.title = 'All Products | UrbanCart';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <section>
      <div className="m-5">
        <SearchBar />
        <SelectCategory />
      </div>

      {showCategoryProduct ? (
        // Showing filtered products by dropdown
        <ProductCard />
      ) : searchProduct ? (
        // Showing search results
        searchFilteredProduct.length === 0 ? (
          <p className="text-2xl font-bold text-center">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 my-10 md:grid-cols-5 gap-5 px-4">
            {searchFilteredProduct.map((item) => (
              <ProductsCard key={item.id} productsItem={item} />
            ))}
          </div>
        )
      ) : allProduct.length === 0 ? (
        // Showing loading state
        <LoadingCard />
      ) : (
        // Showing all products
        <div className="grid grid-cols-2 my-10 md:grid-cols-5 gap-5 px-4">
          {allProduct.map((productsItem) => (
            <ProductsCard key={productsItem.id} productsItem={productsItem} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllProducts;
