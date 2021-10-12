import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from '@material-ui/core';
import './styles/nav-menu.scss'


const NavMenu = () => {
    return (
        <nav className='nav-menu'>
            <div className='seperator px-3 pt-1'><Button className='nav-buttons'><NavLink className='nav-link' to='/food-calculator'>Collect Food Loan</NavLink></Button></div>   
            <div className='seperator px-3 pt-1'><Button className='nav-buttons-green'><NavLink className='nav-link' to='/food-calculator'>Compare Food Prices</NavLink></Button></div> 
           

         
            <div className='seperator px-3 pt-3'>Rice</div>
            <div className='seperator px-3 pt-3'><p>Soup</p></div>   
            <div className='seperator px-3 pt-3'><p>Tubers</p></div>       
            <div className='seperator px-3 pt-3'><p>Beans</p></div>      
            <div className='seperator px-3 pt-3'><p>Stew</p></div>        
            <div className='seperator px-3 pt-3'><p>Vegetable</p></div>
            <div className='seperator px-3 pt-3'><p>Fruit Juice</p></div>
          
        </nav>
    )
}

export default NavMenu