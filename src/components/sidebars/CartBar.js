import React, { useState } from "react";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BasketHub from "./BasketHub";
import Shopcart from "../../assets/images/Shopcart.png";
import { connect } from "react-redux";
import {openCart, closeCart} from './utils'
// import { selectCartItemsCount } from "../../reducers/cartReducer/selector";
import { authUserSelector } from "../../reducers/authReducer/selector";
import { toggleCartHidden} from "../../actions/header/actions";
import { createStructuredSelector } from "reselect";
import "./styles/CartSideBar.scss";

SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);



const CartBar = ({ itemCount,toggleCartHidden,authUser }) => {
  // cart button at the buttom right used for opening mycart sidebar and closing
  var cartButton = (
    <button
      className="feedback"
      onClick={() => {
        openCart();
        toggleCartHidden();
        setCart(
          (cartButton = (
            <button
              className="feedback"
              onClick={() => {
                closeCart();
                setCart(cart);
              }}
            >
              {/* <span>{itemCount}</span> */}
              <img src={Shopcart} alt="shopcart" />
            </button>
          ))
        );
      }}
    >
      {/* <span>{itemCount}</span> */}
      <img src={Shopcart} alt="shopcart" />
    </button>
  );
   const [cart, setCart] = useState(cartButton);
  // end of cart button
  
  return (
    <>
      <div id="mycart" className="hubcartBasket">
        <div className="hubBasket">
          <p className="hubcartBasket-header">My Hubmart Basket</p>
          <button  className="hubBasket-btn" onClick={closeCart}>
            &times;
          </button>
        </div>
        {itemCount >=1 ? (
          <BasketHub />
        ) : (
          <div className="emptybasket">
            <p className="empty">Your Basket is Empty.</p>
          </div>
        )}
        <div className="continue-shopping">
          <button>Continue Shoping</button>
        </div>
        <p style={{ textAlign: "center", borderTop: ".2em rgb(241, 240, 240) solid" }}>
          Products you may like
        </p>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
          style={{
            display: "flex",
            height: "25vh",
            width: "250px",
            borderBottom: ".2em rgb(241, 240, 240) solid",
          }}
        >
          <SwiperSlide>
            <div className="related-items">
              {/* <img src={cake} alt="cart-items" className="related-img" /> */}
              <div style={{ color: "black" }}>
                <p>
                  HUBDELI GRILLED TITUS FISH
                  <input type="number" placeholder="1" />
                  <span>
                    <button onClick={() => console.log("clicked")}>Add to Cart</button>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="related-items">
              {/* <img src={cake} alt="cart-items" className="related-img" /> */}
              <div style={{ color: "black" }}>
                <p>
                  HUBDELI GRILLED TITUS FISH
                  <input type="number" placeholder="1" />
                  <span>
                    <button onClick={() => console.log("clicked")}>Add to Cart</button>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="related-items">
              {/* <img src={cake} alt="cart-items" className="related-img" /> */}
              <div style={{ color: "black" }}>
                <p>
                  HUBDELI GRILLED TITUS FISH
                  <input type="number" placeholder="1" />
                  <span>
                    <button onClick={() => console.log("clicked")}>Add to Cart</button>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="related-items">
              {/* <img src={cake} alt="cart-items" className="related-img" /> */}
              <div style={{ color: "black" }}>
                <p>
                  HUBDELI GRILLED TITUS FISH
                  <input type="number" placeholder="1" />
                  <span>
                    <button onClick={() => console.log("clicked")}>Add to Cart</button>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="related-items">
              {/* <img src={cake} alt="cart-items" className="related-img" /> */}
              <div style={{ color: "black" }}>
                <p>
                  HUBDELI GRILLED TITUS FISH
                  <input type="number" placeholder="1" />
                  <span>
                    <button onClick={() => console.log("clicked")}>Add to Cart</button>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="mybutton">{authUser ? cartButton : null}</div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  // itemCount: selectCartItemsCount,
  authUser: authUserSelector
})

export default connect(mapStateToProps,{toggleCartHidden})(CartBar);

