import React from 'react';
import './styles/footer.scss';
import soupeLogo from '../../assets/images/soupe-logo.jpeg'

 const Footer = () => {
    return (
        <>         
        <footer className="footer-items">
                <div className="row footer-menu">
                <div className='col-md-3 col-lg-3 footer-menu-img'>
                <img src={soupeLogo} style={{width:'180px', height:'80px'}} alt='soupe logo' />    
                    <p className='footer-menu-sublink'>Soupe Stores H.Q </p>
                    <p className='footer-menu-sublink'>24 Valley View Estate, Lagos</p>
                  </div>            
                {/* <div className="col-md-2 col-lg-2 footer-menu-link1">
                </div> */}
                    
                    <div className="col-md-2 col-lg-2">
                        <h4 className='footer-header'>Our Company</h4>
                        <div className='footer-menu-link2'>
                    <p className='footer-menu-sublink'>Get to know us</p>
                    <p className='footer-menu-sublink'>Careers</p>
                    <p className='footer-menu-sublink'>Be a vendor or agent</p>
                    <p className='footer-menu-sublink'>Contact us</p>
                    </div>
                    </div>

                    <div className="col-md-2 col-lg-2">
                        <h4 className='footer-header'>Store Area</h4>
                        <div className='footer-menu-link3'></div>
                    <p className='footer-menu-sublink'>Locate a store</p>
                    </div>
                    
                    <div className="col-md-2 col-lg-2 ">
                    <h4 className='footer-header'>Services</h4>
                    <div className='footer-menu-link4'>        
                    <p className='footer-menu-sublink'>Track your Order</p>
                    <p className='footer-menu-sublink'>Returns & Exchange</p> 
                    </div>        
                </div>            
                    <div className="border-primary col-md-2 col-lg-2">
                    <h4 className='footer-header'>Payment & Shipping</h4>
                    <div className='footer-menu-link5'>
                     <p className='footer-menu-sublink'> Soupe Delivery</p>
                     <p className='footer-menu-sublink'>Fast Delivery by:</p>
                    </div>
                </div>           
            </div>
            </footer>
           <footer className="copyright">
             <p>&copy; Soupe Stores Limited - All Rights Reserverd</p>
          </footer>
        </>
    )
}


export default Footer