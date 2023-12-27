import React from "react";
// import './App.css';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        {/* When we click on the logo it should go to homePage we have to link the logo to homePage using Link feature to react-router-Dom */}

        <Link to="/">
          <img
            src="https://www.simicart.com/blog/wp-content/uploads/eCommerce-logo-1.jpg"
            alt="HomePage logo"
          />
        </Link>

        <div className="search-box">
          <input type="text" placeholder="Search a product"></input>
        </div>

        <Link to="/checkout">
          <div className="header_right">
            <div className="headerOption_basket">
              <img src= "https://media.istockphoto.com/id/1185675328/vector/shopping-cart-icon-with-editable-stroke-and-pixel-perfect.jpg?s=612x612&w=0&k=20&c=6v0EKUYvhcr6lL35A6RXtNeuM5YO9taj0PrsV6sfTvI=" alt="Checkout logo" /> 
              <span style={{color: "white"}}>cart 0</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
