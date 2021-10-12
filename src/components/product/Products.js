import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCartItems } from "../../actions/cart/actions";
import PropTypes from "prop-types";

const  Products = ({product}) => {
const dispatch =  useDispatch()
const [quantity] = useState(1)
  return (
    <div className="product_card">
      <div className="product_heading">
        <span className="product_slug">{product.category}</span>
        <Link className="product_links" to={`/products/${product.id}/${product.item}`}>
          <div className="product_thumbnail">
            <img src={product.image_url} alt="product_thumbnail" />
          </div>
          <h2 className="product_title">{product.item}</h2>
        </Link>
      </div>
      <div className="product_addcart_price">
        <span className="span">₦{product.price}</span>
        <div className="product_addcart">
          <button
            onClick={()=> dispatch(addCartItems(product,quantity))}
          >
            <FontAwesomeIcon icon="shopping-cart" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
// Products.propTypes = {
//   product: PropTypes.object.isRequired,
//   addCartItems: PropTypes.func.isRequired,
// };

export default Products;
