import React, { useEffect } from "react";
import { connect,useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isLoadingSelector} from "../../reducers/productReducer/selector";
import { Slider } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/shop.scss";
import DropMenu from "./utils/dropDown";
import loader from '../../assets/images/loader.gif';
import {formatter} from '../../utils/currencyFormater';
import { fetchAllProducts } from "../../actions/products/actions";
const useStyles = makeStyles({
  root: {
    width: 300,
    color: "#F15A22",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const PriceSlider = withStyles({
  root: {
    color: "#F15A22",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function Thumb(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function Shop({isLoading}) {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchAllProducts());
return () =>({
// 
})
},[])

  const classes = useStyles();
  const [price, setPrice] = React.useState([30, 1500000]);
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
 

  // Use it.
  var val1 = formatter.format(price[1]);
  var val0 = formatter.format(price[0]);

  return (
    <div className="shop-container">
      <div className="shop-breadcrumb">
        <p>
          Home
          <span>&gt;</span>
          <span>Shop</span>
        </p>
      </div>
      <div className="shop-menu-products">
        <div className="shop-side-menu">
          <div className="shop-menu">
            <p className="catgori">Browse Categories</p>
            <DropMenu />
          </div>
          <div className="priceslider">
            <div className="filters">
              <p>Filter</p>
            </div>
            <p>Price</p>
            <div className={classes.root}>
              <PriceSlider
                value={price}
                track={true}
                min={30}
                max={1500000}
                name="filter-price"
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                ThumbComponent={Thumb}
                // aria-valuetext={valuetext}
              />
            </div>
            <div className="range-slider">
              <p>
                Price: {val0} - {val1}
              </p>
            </div>
            <div className="filter-btn">
              <button>Filter</button>
            </div>
          </div>
        </div>
        <div className="shop-products">
          <div className="shop-product-title">
            <p className="title-shop">Shop</p>
            <p className="title-result">Showing 1–24 of 1304 results</p>
          </div>
          <div className="shop-product-nav">
            <div className="icon-grid">
              <span>
                <FontAwesomeIcon icon="th" />
              </span>
              <span>
                <FontAwesomeIcon icon="grip-vertical" />
              </span>
              <span>
                <FontAwesomeIcon icon="grip-lines-vertical" />
              </span>
              <span>
                <FontAwesomeIcon icon="th-large" />
              </span>
            </div>
            <select className="shop-order-select">
              <option  selected disabled hidden>
                Sort by price: high to low
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
            <select className="shop-show-select">
              <option  selected disabled hidden>
                hi
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
            <div className="shop-show-dispaly">
              <input />
              <span style={{ paddingLeft: "5px" }}>of 566</span>
              <span style={{ paddingLeft: "15px" }}>&gt;</span>
            </div>
          </div>
          {
            isLoading ? 
            (<img className="shop_img_loader" src={loader} alt="loading" />)
            :
           (
             <>
            {/* <ShopProducts />
            <ShopProducts />
            <ShopProducts />
            <ShopProducts />
            <ShopProducts />
            <ShopProducts />
            <ShopProducts /> */}
            </>
           )
            }
      
        </div>
      </div>
      <div className="products-pagination">
        <p style={{ fontSize: "15PX", fontWeight: "400" }}>Showing 1–20 of 1304 results</p>
        <div className="pagination-btn">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: isLoadingSelector,
});

export default connect(mapStateToProps,{fetchAllProducts})(Shop);