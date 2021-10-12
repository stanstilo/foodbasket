import React,{useState} from 'react';
import SideBar from '../sidebars/SideBar';
import CartBar from '../sidebars/CartBar';
import TopNav from '../header/TopNav';
import CenteredNav from '../header/CenteredNav';
import NavMenu from '../header/NavMenu';
import Footer from '../footer/Footer';
import Shopcart from '../../assets/images/Shopcart.png';


export default function Layout(props) {
    //  cart button at the buttom right used for opening mycart sidebar and closing  
     var cartButton = <button className="feedback" onClick={() => {
        openCart(); setCart(cartButton = <button className="feedback"
        onClick={()=> {closeCart();
        setCart(cart)}}>
        <span>0</span>
            <img src={Shopcart}  alt="shopcart" />
        </button>)}}>
        <span>0</span>
        <img src={Shopcart}  alt="shopcart" />
    </button>
    const [cart, setCart] = useState(cartButton);
    // end of cart button

    return (
       <>
        <SideBar />
        <CartBar cart={cart} closeCart={closeCart} />
        <div id="main">
            <TopNav />
                <CenteredNav />
            <NavMenu />
                {props.children}
            <Footer />
        </div>
       </>
    )
}


function openCart() {
    document.getElementById("mycart").style.width ='400px'
    document.getElementById("mybutton").style.marginRight = '400px'
    document.getElementById("main", "content").style.backgroundColor = "white";
}
function closeCart() {
    document.getElementById("mycart").style.width ='0'
    document.getElementById("mybutton").style.marginRight = '0'
    document.getElementById("main").style.backgroundColor = "white";

}
