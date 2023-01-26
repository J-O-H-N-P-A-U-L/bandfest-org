import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">        <text style={{color: '#FF0000'}}>B</text>
                      <text style={{color: '#FF5A00'}}>a</text>
                      <text style={{color: '#FFB400'}}>n</text>
                      <text style={{color: '#FFff00'}}>d</text>
                      <text style={{color: '#A5ff00'}}>f</text>
                      <text style={{color: '#4Bff00'}}>e</text>
                      <text style={{color: '#00ff00'}}>s</text>
                      <text style={{color: '#00ff5A0'}}>t</text>
                      <blink>
                      <text style={{color: '#00ffB4'}}>.</text>
                      <text style={{color: '#00ffff'}}>o</text>
                      <text style={{color: '#00B4ff'}}>r</text>
                      <text style={{color: '#005Aff'}}>g</text>
                    </blink></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Home
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/about"
              >
                About
              </ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
