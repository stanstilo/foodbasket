import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/productDetails.scss";
import RelatedProducts from "./RelatedProducts";
// import { selectCartItemsCount } from "../../reducers/cartReducer/selector";
import { removeCartItems, addCartItems, reduceCartItem } from "../../actions/cart/actions";
import { fetchSingleProduct } from "../../actions/products/actions";
import { singleProductSelector } from "../../reducers/productReducer/selector";
import { authUserSelector } from "../../reducers/authReducer/selector";
import { createStructuredSelector } from "reselect";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  const { singleProduct, isAuthenticated, removeCartItems, addCartItems, reduceCartItem, quantityCount } = props;
  return (
    <>
      <div className="products-breadcrumbs">
        <p>{props.location.pathname}</p>
      </div>
      <div className="product-menu-item">
        <div className="sidemenu-item">
          <div className="show-catego">
            Show All Categories <span>&gt;</span>
          </div>
          <p className="slug">HubDeli</p>
          <div className="slug-item">
            <Link style={{ textDecoration: "none" }}>
              <p>Yam</p>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <p>Grocery</p>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <p>Raw Material</p>
            </Link>
          </div>
        </div>

        <div className="product-item-details">
          <img alt="product" src={singleProduct.image_url} className="product-item-img" />
          <div className="product-item-properties">
            <p className="product-item-slug">HubDeli</p>
            <p className="product-item-name">{singleProduct.item}</p>
            <p className="compare-wishlist">
              {" "}
              Add to Wishlist <span>Compare</span>
            </p>
            <p className="product-item-price">{singleProduct.price}</p>
            <div style={{ display: "flex" }}>
              <div className="addmore">
                {/* <input className="more-qty" value={quantityCount?quantityCount:1} /> */}
                <button className="add-plus" onClick={() => addCartItems(singleProduct)}>+</button>
                <button className="sub-minus" onClick={() => reduceCartItem(singleProduct)}>-</button>
              </div>
              <button
                className="product-addtocart"
                onClick={() => addCartItems(singleProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {isAuthenticated ? (
        <div>
          <button className="review-link active">Reviews</button>
          <div className="review-tab">
            <div
              id="reviews"
              className="review"
              style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}
            >
              <p>Based on 0 reviews</p>
              <p>Only logged in customers who have purchased this product may leave a review. </p>
            </div>
            <div className="review-stars">
              <p>
                0.0
                <p>overall</p>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <span>---------5</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <span>---------4</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} /> <span>---------3</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} />
                <FontAwesomeIcon icon={["fas", "star"]} />
                <span>---------2</span>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "star"]} /> <span>---------1</span>
              </p>
            </div>
            <p className="each-reviews">There are no reviews yet.</p>
          </div>
        </div>
      ) : null}
      <RelatedProducts /> */}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  singleProduct: singleProductSelector,
  isAuthenticated: authUserSelector,
  // quantityCount :  selectCartItemsCount 
});
export default connect(mapStateToProps, { removeCartItems, addCartItems, reduceCartItem })(
  ProductDetails
);
