import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4 >Information</h4>
          <ul>
            <li>About Us</li>
            <li>Delivery Info</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 >My Account</h4>
          <ul>
            <li>Login</li>
            <li>Order History</li>
          </ul>
        </div>
        <div>
          <h4 >Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4 >Contact Us</h4>
          <p>Email: support@ecomm.com</p>
        </div>
      </div>
      <p className="bottom">© 2025 E-Comm. All Rights Reserved.</p>
    </footer>
  );
}
