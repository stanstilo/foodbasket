import React from "react";
import "./utility.css";

export default function DropMenu() {
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches("li")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <>
      <ul>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            HubDeli
              <div className="dropdown-content">
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
                <a href="#">Sauce </a>
                <a href="#">Sides </a>
                <a href="#">Soups </a>
                <a href="#">Stew </a>
                <a href="#">Swallow </a>
                <a href="#">Yam & Beans</a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Fresh Food
              <div className="dropdown-content">
              <a href="#">African </a>
                <a href="#">Meat & Fish </a>
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
                <a href="#">Sauce </a>
                <a href="#">Sides </a>
                <a href="#">Soups </a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Health & Beauty
              <div className="dropdown-content">
              <a href="#">African </a>
                <a href="#">Meat & Fish </a>
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
                <a href="#">Sauce </a>  
                <a href="#">Sides </a>
                <a href="#">Soups </a>
                <a href="#">Stew </a>
                <a href="#">Swallow </a>
                <a href="#">Yam & Beans</a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Groceries
              <div className="dropdown-content">
                <a href="#">Meat & Fish </a>
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
                <a href="#">Sauce </a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Bakery
              <div className="dropdown-content">
                <a href="#">African </a>
                <a href="#">Meat & Fish </a>
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
                <a href="#">Sauce </a>
                <a href="#">Sides </a>
                <a href="#">Soups </a>
                <a href="#">Stew </a>
                <a href="#">Swallow </a>
                <a href="#">Yam & Beans</a>
            </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Home & Office
              <div className="dropdown-content">
                <a href="#">African </a>
                <a href="#">Meat & Fish </a>
                <a href="#">Pasta </a>
                <a href="#">Rice Meal</a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div>
            <span style={{ paddingRight: ".5rem" }}>&gt;</span>
            Beverage
              <div className="dropdown-content">
                <a href="#">Stew </a>
                <a href="#">Swallow </a>
                <a href="#">Yam & Beans</a>
              </div>
            </div>
          </li>
      </ul>
    </>
  );
}
