import React from 'react'

export default function SideMenu() {
    return (
        <div style={{ display: "block", marginTop: "-65px" }}>
          <p href="html" className="menu-catgori">
            Shop by Category
          </p>
          <div className="vertical-menu">
            <ul>
              <li className="dropdown">
                <div>
                  <span style={{ paddingRight: ".5rem" }}>&gt;</span>
                  HubDeli
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
                  Beverages
                  <div className="dropdown-content">
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
                  Bakery
                  <div className="dropdown-content">
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
                    <a href="#">Pasta </a>
                    <a href="#">Rice Meal</a>
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
                    <a href="#">Pasta </a>
                    <a href="#">Rice Meal</a>
                    <a href="#">Stew </a>
                    <a href="#">Swallow </a>
                    <a href="#">Yam & Beans</a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <div>
                  <span style={{ paddingRight: ".5rem" }}>&gt;</span>
                  Health & Beauty
                  <div className="dropdown-content">
                    <a href="#">Pasta </a>
                    <a href="#">Rice Meal</a>
                    <a href="#">Stew </a>
                    <a href="#">Swallow </a>
                    <a href="#">Yam & Beans</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    )
}
