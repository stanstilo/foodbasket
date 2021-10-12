import React  from "react";
import fruits from '../../assets/images/fruits.jpg';



import './styles/relatedProducts.scss';



function relatedDisplay(evt, relatedName) {
    // Declare all variables
    var i, relatedcontent, relatedlinks;
  
    // Get all elements with class="productcontent" and hide them
    relatedcontent = document.getElementsByClassName("relatedcontent");
    for (i = 0; i < relatedcontent.length; i++) {
        relatedcontent[i].style.display = "none";
    }
  
    // Get all elements with class="productlinks" and remove the class "active"
    relatedlinks = document.getElementsByClassName("relatedlinks");
    for (i = 0; i < relatedlinks.length; i++) {
      relatedlinks[i].className = relatedlinks[i].className.replace("active", " ");
    }
  
    // Show the current product, and add an "active" class to the button that opened the product
    document.getElementById(relatedName).style.display = "flex";
    evt.currentTarget.className += " active";
}
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default function RelatedProducts() {


  return (
        <>
            <button className="relatedlinks active" 
                onClick={(event)=> relatedDisplay(event,'Related Products')}>
                Featured Products
            </button>
    <div className='related'>
            <div id="Related Products" className="related-content" style={{display:'flex'}}>
                <div className="related-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="related-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={fruits} alt="John" />
                                    <a>John Doe</a>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                
                <div className="related-card">
                                    <div style={{display: 'flex'}}>
                                    <p className="related-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={fruits} alt="John" />
                                    <a>John Doe</a>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="related-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="related-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={fruits} alt="John" />
                                    <a>John Doe</a>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="related-cards">
                                     <div style={{display: 'flex'}}>
                                    <p className="related-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={fruits} alt="John" />
                                    <a>John Doe</a>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
            </div>
    </div>        
                       
    </>
  );
}            
                                 
