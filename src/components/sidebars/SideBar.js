import React from 'react'
import  './styles/SideBar.scss';


export default function SideBar() {
    return (
        <>
        <div id="mySidenav" className="sidenav">
            {/* <button onClick={closeNav}>&times;</button> */}
        <div className='hubcart-title'>
                    <p style={{color:"#ffffff"}}>Categories</p>
                </div>
            <p href="#">Home</p>
            <p href="#">About</p>
        </div>
    </>
    )
}
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.getElementById("main").style.backgroundColor = "white";
//   }
