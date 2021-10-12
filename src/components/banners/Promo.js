import React from "react";
import voucher1 from "../../assets/images/soupe_man.PNG";
import voucher2 from "../../assets/images/bakery_feature.jpg";
import voucher3 from "../../assets/images/green-veg.jpg";
import voucher4 from "../../assets/images/produce_feature-1.jpg";
import voucher5 from "../../assets/images/delicious-food.jpg";
import { withRouter } from "react-router-dom";
import "./styles/promo.scss";


const Promo = () => {
  return (
    <>
    <h4 className='promo-header text-uppercase text-center mt-4'>Food gallery</h4>
    <div className='promo-container mt-5'>
       <div className='row'>
        <div className="col-md-5 col-lg-5">
          <img src={voucher5} className='voucher-5 voucher-img' alt="promo-images" />
          <div className='mt-4'> 
            <img src={voucher1} className='voucher-1 voucher-img' alt="promo-images"/>
            </div>
        </div>
         <div className="col-md-7 col-lg-7"> 
          <div className='row'>        
            <div className="col-md-6 col-lg-6">
            <img className='voucher-img' src={voucher3}  alt="promo-images" />      
          </div>  
          <div className="col-md-6 col-lg-6">
          <img className='voucher-img h-100' src={voucher2}  alt="promo-images" />
            </div>
           
            <div className='col-md-6 col-lg-6 mt-4'>
            <img className='voucher-img h-100' src={voucher2}  alt="promo-images" /> 
              </div>
            <div className='col-md-6 col-lg-6'>
            <img className='voucher-img h-100' src={voucher4}  alt="promo-images"/> 
             </div>        
          </div>
         </div>
         </div>    
      </div>
      </>
  );
}
export default withRouter(Promo)