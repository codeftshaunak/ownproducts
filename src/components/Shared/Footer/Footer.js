import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer m-auto">
        <div className="contains flex justify-center flex-wrap">
          <div className="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul className="flex text-2xl justify-around">
              <BsFacebook />
              <BsGithub />
              <AiFillInstagram />
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
