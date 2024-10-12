import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">
        <hr></hr>
      <div className="row">
        <div className="col-md-4">
          <h5>mettā muse</h5>
          <ul className="list-unstyled">
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>Orders & Shipping</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <div className="d-flex gap-3">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="mt-3">
            <img src="payment-logo.png" alt="Payment Method" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
