import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"

import { SocialIcon, FlagIcon } from "./icons"
import { socialIcons, spainFlag } from "../constants/index"
import Hero from "./hero"
import "./header.css"
import "./heroImage.css"

const Header = ({ siteTitle }) => (
  <Fragment>
    <header className="header">
      <div className="brand-container">
        <h1 className="brand">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="header-icons">
        {socialIcons.map(icon => (
          <SocialIcon key={icon.id} {...icon} />
        ))}
        <FlagIcon {...spainFlag} />
      </div>
    </header>
    <Hero />
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
