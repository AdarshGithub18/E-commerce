import SelectCategory from '../../components/allproducts/SelectCategory';
import ProductCard from '../../components/allproducts/ProductCard';
import ProductsCard from '../../components/allproducts/ProductsCard';
import SearchBar from '../../components/allproducts/SearchBar';
import { useContext } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';
import PaginationComp from '../../components/allproducts/PaginationComp';
import LoadingCard from '../../components/loading-card/Loadingcard';

const AllProducts = () => {
  const { allProduct, showCategoryProduct } = useContext(
    ProductFetchingContext
  );

  return (
    <section>
      <div className="rounded-md bg-gray-50 py-3 m-5">
        <SearchBar />

        <SelectCategory />
      </div>

      {showCategoryProduct ? (
        // its showing filtered products by dropdown
        <ProductCard />
      ) : // its showing product for the all products page
      allProduct.length === 0 ? (
        <LoadingCard />
      ) : (
        <div className="grid grid-cols-2 my-10 md:grid-cols-5 gap-5 px-4">
          {allProduct.map((productsItem) => {
            return (
              <>
                <ProductsCard productsItem={productsItem} />
              </>
            );
          })}
        </div>
      )}

      {!showCategoryProduct ? (
        <div className="flex justify-center my-10">
          <PaginationComp />
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default AllProducts;
