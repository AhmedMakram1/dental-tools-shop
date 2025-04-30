import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">DentaCarts</h5>
            <p className="small">
              Your trusted source for high-quality dental products and equipment.
            </p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-envelope me-2"></i>
              <span className="small">info@dentacarts.com</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-telephone me-2"></i>
              <span className="small">+20 123 456 7890</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              <span className="small">123 Dental St, Cairo, Egypt</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-clock me-2"></i>
              <span className="small">Sun-Thu: 9AM - 5PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none small">Home</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="text-white text-decoration-none small">Products</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none small">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none small">Contact</a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none small">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/products/dental-instruments" className="text-white text-decoration-none small">Dental Instruments</a>
              </li>
              <li className="mb-2">
                <a href="/products/consumables" className="text-white text-decoration-none small">Consumables</a>
              </li>
              <li className="mb-2">
                <a href="/products/equipment" className="text-white text-decoration-none small">Equipment</a>
              </li>
              <li className="mb-2">
                <a href="/products/sterilization" className="text-white text-decoration-none small">Sterilization</a>
              </li>
              <li>
                <a href="/products/new-arrivals" className="text-white text-decoration-none small">New Arrivals</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Newsletter</h5>
            <p className="small mb-3">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control form-control-sm" 
                placeholder="Your Email" 
                aria-label="Your Email"
              />
              <button className="btn btn-primary btn-sm" type="button">
                Subscribe
              </button>
            </div>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row pt-3 border-top">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} DentaCarts. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-0">
              <a href="/privacy" className="text-white text-decoration-none me-3">Privacy Policy</a>
              <a href="/terms" className="text-white text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;