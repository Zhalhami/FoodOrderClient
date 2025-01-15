import React, { useContext } from "react";
import { CartContext } from "./CreateContext";
import { Link } from "react-router-dom";
import { useMemo } from "react";

function Header() {
  const { cart, toggleCartVisibility } = useContext(CartContext);

  // Calculate the total cart count
  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-hamburger"></i> Foodorder
        </Link>

        {/* Right-Side Buttons (Always Visible) */}
        <div className="d-flex align-items-center gap-3 order-lg-3">
          {/* Admin Button */}
          <Link to="/auth" className="btn btn-success">
            Admin
          </Link>

          {/* Cart Button */}
          <button
            type="button"
            className="btn position-relative"
            onClick={toggleCartVisibility}
            aria-label="View Cart"
            title="View Cart"
          >
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Toggler for smaller screens */}
        <button
          className="navbar-toggler order-lg-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            type="button"
            className="btn-close text-reset d-lg-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Close"
          ></button>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu-plan" className="nav-link">
                Menus
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training" className="nav-link">
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
