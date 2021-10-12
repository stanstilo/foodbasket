import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux'
import { Switch, Route, withRouter} from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faThLarge,
  faGripLinesVertical,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import Shop from './components/product/Shop';
import HomePage from "./components/main/Home";
import Layout from "./components/main/Layout";
import ProductDetail from "./components/product/ProductDetail";
import DashBoard from "./components/dashboard/DashBoard";
import AuthLayout from "./components/auth/AuthLayout";
import TrackOrders from "./components/product/TrackOrders";
import ViewCartPage from "./components/dashboard/ViewCartPage";
import PrivateRoute from "./components/main/PrivateRoute";
import {load_user,checkAuthenticated} from './actions/auth/actions'
import CheckoutForm from './components/checkout/CheckOutPage';
import SignUp from './components/auth/SignUp';
import foodCalculatorIndex from './components/foodCalculator/foodCalculatorIndex';
import Activate from './components/auth/Activate';


library.add(
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faThLarge,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faGripLinesVertical,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight,
  faCheck
);


const MainApp = () =>{
  const dispatch = useDispatch()
  const token = localStorage.getItem("access");
  useEffect(() => {
    if(token){
      dispatch(checkAuthenticated());
      dispatch(load_user());
    }
  }, [token])// eslint-disable-line react-hooks/exhaustive-deps
        return (
            <Layout>
             <div id="content">
             <Switch>           
               <PrivateRoute path='/my-account' render={(props)=> <DashBoard {...props} />} />
               <Route path="/products/:id/" component={ProductDetail} />
               <Route path="/shop/" component={Shop} />
               <Route path="/track-your-order/" component={TrackOrders} />
               <Route path="/my-cart/" component={ViewCartPage} />
               <Route path="/checkout/" component={CheckoutForm} />
               {/* <Route component={NotFoundPage}/> */}
                <Route path="/login-signup/" component={AuthLayout} />
                <Route path='/signup' component={SignUp} />
                <Route exact path="/" component={HomePage} />
                <Route path='/food-calculator' component={foodCalculatorIndex} />
                <Route path="/activate/:uid/:token" component={Activate} />
             </Switch>
             </div>
         </Layout>
        )
    }


export default withRouter(connect(null,{load_user,checkAuthenticated})(MainApp));

