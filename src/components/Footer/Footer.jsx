import React from "react";

function Footer() {
  return (
    <div className="container-fluid px-lg-5 bg-light pt-3 mt-5">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center">
        <div className="d-flex flex-column ">
          <h2 className="fw-bold">SHOP.CO</h2>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="d-flex gap-3">
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-github"></i>
          </div>
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold">COMPANY</p>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Career
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold">HELP</p>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold">FAQ</p>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Payments
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold">RESOURCES</p>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
