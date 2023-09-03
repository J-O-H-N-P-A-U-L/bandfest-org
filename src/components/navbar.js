import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const isActive = ({ isCurrent }) => ({
  className: isCurrent ? "nav-link active" : "nav-link",
});

const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;

const Navbar = ({ siteTitle }) => {
  const handleSearch = () => {
    // Implement your search functionality here
    alert("Perform search here");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-inner">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {/* Your brand content */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/about">About</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/services">Services</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/portfolio">Portfolio</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/contact">Contact</ExactNavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search" />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: "",
};

export default Navbar;
