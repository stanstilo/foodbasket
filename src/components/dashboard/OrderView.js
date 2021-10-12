import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchOrders } from '../../actions/products/actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash"
const OrderView = (props) => {
    const orderState = useSelector(state=>state.allProductReducer.myOrders);
    let total = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders())
    }, [])
    return (
    <>
      <div className="view-container">
      <div className="viewcart-page">
        <div className="viewcart-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block"></div>
          <div className="header-block">
            <span> Unit Price</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Total</span>
          </div>
          <div className="header-block">
            <span>Status</span>
          </div>
        </div>
        {_.map(orderState, (orders, idx) => {
          total += orders.total_price * orders.quantities;
          console.log(orders)
          return (
            <div className="viewcart-item" key={idx}>
              <span className="name">{orders.products}</span>
              <span className="price">₦{orders.total_price}</span>
              <span className="quantity">
                {/* <div className="arrow" onClick={() => reduceCartItem(cartItem)}>
                  &#10094;
                </div> */}
                <span className="value">{orders.quantities}</span>
                {/* <div className="arrow" onClick={() => cartItem.quantity +1}>&#10095;</div> */}
              </span>
              <span className="price">₦{total}</span>
              <span className="status">{orders.ordered? <p>Recieved</p>:<p>In-Progress</p>}</span>
            </div>)
        })}
      </div>
    </div>
        )
    })
       
    :
        <div className="not-active">
             <p>No order yet</p>
             <button>Browse Products 
                 <span style={{paddingLeft:"1rem"}}><FontAwesomeIcon icon='shopping-basket' /></span>
             </button>
         </div>}
         </>
    )
}

export default OrderView