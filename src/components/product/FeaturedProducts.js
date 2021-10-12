import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import loading from "../../assets/images/loader.gif";
import { fetchAllProducts } from "../../actions/products/actions";
import { productsDisplay } from "./utils/tabOpen";
import ProductList from "./ProductList";
import "./styles/featuredproducts.scss";


const FeatureProducts= () => {
  const productSate = useSelector(state => state.allProductReducer);
  const {allProduct,isLoading} = productSate;
 const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAllProducts());
  }, [])

    return (
      <div className="products">
        <div className='product-tabs'>
        <button
          className="productlinks active"
          onClick={(event) => productsDisplay(event, "Featured Products")}
        >
          Vegetables
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Best Selling")}
        >
         Grains
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Top Rated Products")}
        >
          Legumes
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Top Rated Products")}
        >
          Soup
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Top Rated Products")}
        >
         Tubers
        </button>
        </div>
        <div id="Featured Products" className="productcontent" style={{ display: "flex" }}>
          {allProduct.length ? (
            <ProductList products={allProduct} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>

        <div id="Best Selling" className="productcontent">
          {allProduct.length ? (
            <ProductList products={allProduct} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>
        <div id="Top Rated Products" className="productcontent">
          {allProduct.length ? (
            <ProductList products={allProduct} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>
      </div>
    );
}

FeatureProducts.propTypes = {
  allProduct: PropTypes.array,
  fetchAllProducts: PropTypes.func.isRequired,
  addCartItems: PropTypes.func.isRequired,
};

export default FeatureProducts;
