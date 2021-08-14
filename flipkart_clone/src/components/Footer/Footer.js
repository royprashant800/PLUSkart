import React from "react";
import "./style.css";
import payIcon from "../../images/footer/payment-icon.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-subcat">
          <label>About</label>
          <a>
            <li>Contact Us</li>
          </a>
          <a>
            <li>About Us</li>
          </a>
          <a>
            <li>Careers</li>
          </a>
          <a>
            <li>Flipkart Stories</li>
          </a>
          <a>
            <li>Press</li>
          </a>
          <a>
            <li>Flipkart Wholesale</li>
          </a>
          <a>
            <li>Corporate Information</li>
          </a>
        </div>
        <div className="footer-subcat">
          <label>Help</label>
          <a>
            <li>Payments</li>
          </a>
          <a>
            <li>Shipping</li>
          </a>
          <a>
            <li>Cancellation & Returns</li>
          </a>
          <a>
            <li>FAQ</li>
          </a>
          <a>
            <li>Report Infringement</li>
          </a>
        </div>
        <div className="footer-subcat">
          <label>Policy</label>
          <a>
            <li>Return Policy</li>
          </a>
          <a>
            <li>Terms Of Use</li>
          </a>
          <a>
            <li>Security</li>
          </a>
          <a>
            <li>Privacy</li>
          </a>
          <a>
            <li>Sitemap</li>
          </a>
          <a>
            <li>EPR Compliance</li>
          </a>
        </div>
        <div className="footer-subcat">
          <label>Social</label>
          <a>
            <li>Facebook</li>
          </a>
          <a>
            <li>Twitter</li>
          </a>
          <a>
            <li>You Tube</li>
          </a>
        </div>
        <div className="footer-subcat details">
          <label>Mail Us:</label>
          <li>Flipkart Internet Private Limited,</li>
          <li>Buildings Alyssa, Begonia &</li>
          <li>Clove Embassy Tech Village,</li>
          <li>Outer Ring Road, Devarabeesanahalli Village,</li>
          <li>Bengaluru, 560103,</li>
          <li>Karnataka, India</li>
        </div>
        <div className="footer-subcat details">
          <label>Registered Office Address:</label>
          <li>Flipkart Internet Private Limited,</li>
          <li>Buildings Alyssa, Begonia &</li>
          <li>Clove Embassy Tech Village,</li>
          <li>Outer Ring Road, Devarabeesanahalli Village,</li>
          <li>Bengaluru, 560103,</li>
          <li>Karnataka, India</li>
          <li>CIN : U51109KA2012PTC066107</li>
          <li>Telephone: 1800 202 9898</li>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="others">
        <a>
          <li>Sell On Flipkart</li>
        </a>
        <a>
          <li>Advertise</li>
        </a>
        <a>
          <li>Gift Cards</li>
        </a>
        <a>
          <li>Help Center</li>
        </a>
        <a>
          <li>© 2007-2021 Flipkart.com</li>
        </a>
        <img src={payIcon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
