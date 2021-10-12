import React from "react";
import _ from "lodash";
import Products from "./Products";
import PropTypes from "prop-types";

const ProductList = ({products}) => {
  let productCollections = _.map(products, (product, idx) => {
    return <Products key={idx} product={product} />;
  });
  return <>
  {productCollections}
  </>;
};
ProductList.propTypes = {
  Products: PropTypes.array,
  addCartItems: PropTypes.func.isRequired,
};

export default ProductList;
