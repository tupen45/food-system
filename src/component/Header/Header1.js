import React from "react";
import "./Header1.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgaddress from './images/ttty.svg'
import mobileflash from './images/t2.svg'
import Constr1 from "../container/Container";
const Header1 = ({user,handleclick}) => {
 
  return (
    
     <div>
      


<nav class="menu2">
  <div  className="img-fluid"
  >
  <img
            src="https://i.ibb.co/qsXmy2v/logo2.png"
            width="120"
            height='50px'
            alt=""
           
            id="logo"
          />

</div>
  <menu className="right1">
    <li><Link to="/cart">cart</Link></li>
    <li><Link to="/sign" >log in </Link></li>
    <li><Link to="/cheakout" >chechout</Link></li>
    <li><Link to="/register" >sign up</Link></li>
    <li><Link to="/account" >Account</Link></li>
    
  </menu>
</nav>

<section class="home" id="home">
      <div class="content">
        <h1>Order Your Product <span class="yellow">Easier & Faster.</span></h1>
        <p>
          Delivero is a leading global online food delivery marketplace,
          connecting consumers and restaurants through its platform in 24
          countries.
        </p>
        <a href="#" class="home-btn">Go to Menu</a>
      </div>
      <div class="image">
        <img src={imgaddress} alt="" />
      </div>
    </section>
    <Constr1 handleclick={handleclick}/>

    
    <section class="app" id="contact">
      <div class="image">
        <img src={mobileflash} alt="" />
      </div>
      <div class="content">
        <h3>Place your order through our app</h3>
        <p>
          You can easily place your order using our mobile app. Now you can
          download our app for both IOS and Android mobiles.
        </p>
        <div class="links">
          <img src="./images/app-store.png" alt="" />
          <img src="./images/google-play.png" alt="" />
        </div>
      </div>
    </section>

    
    <footer class="footer">
      <div class="top">
        <div class="content">
          <a href="" class="logo">Delive<span class="yellow">roo</span></a>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet
          </p>
        </div>

        <div class="links">
          <div class="link">
            <h4>Contact Information</h4>
            <div>
              <img src="./images/location-cross.svg" alt="" />
              <span>122,Albert St, Port Melbourne,Vic 3207.</span>
            </div>
            <div>
              <img src="./images/sms-tracking.svg" alt="" />
              <span>deliveroo@gmail.com</span>
            </div>
          </div>

          <div class="link">
            <h4>Quick Links</h4>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Download</a>
          </div>

          <div class="link">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Conditions</a>
            <a href="#">Location</a>
          </div>

          <div class="link">
            <h4>Connect with Us</h4>
            <div>
              <img src="./images/instagram.svg" alt="" />
              <span>Instagram</span>
            </div>
            <div>
              <img src="./images/twitter.svg" alt="" />
              <span>Twitter</span>
            </div>
            <div>
              <img src="./images/facebook.svg" alt="" />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>Copyright © 2010-2021 Deliveroo Company S.L. All rights reserved.</p>
      </div>
    </footer>
 </div>
  );
};

export default Header1;
