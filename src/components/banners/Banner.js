import React from 'react'
import { Fade } from 'react-slideshow-image';
import groceries from '../../assets/images/groceries.png';
import fruits from '../../assets/images/fruits.jpg'
import fresh from '../../assets/images/fresh.jpg'
import carrot from '../../assets/images/carrot.jpg'
import './styles/banner.scss';


const fadeImages = [
    carrot,
    fruits,
    groceries,
    fresh
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true
  }
const Banner = () => {
    return (
        <>
          <div>
            <Fade {...properties}>
              <div className="each-fadeone">
                    <img className='slideimage-topleft' src={fadeImages[1]} alt="food-img" />
                    <h2 className='text-img-center'>Fresh Fruits In stock</h2>
                    <img className='slideimage_right' src={fadeImages[3]} alt="food-img" />
              </div>
    
            <div className="each-fadeone-a text-uppercase "> 
              <div className='time-4-food-text'> 
                <h4 className='font-weight-bold'>There's always time for food </h4>  
                    <button className="slide-btn">
                  SHOP NOW</button>
              </div>
                <div className='slide2-container'>
                <img className='slide2-img' src={fadeImages[0]} alt="img-slide" />
                </div>
            </div>
            </Fade>
          </div>
          </>
      );
}
    
export default (Banner);