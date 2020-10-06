import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import spain from "../images/spain-flag-round-icon-128.png"
import { SocialIcon, FlagIcon } from "./icons"
import "./header.css"

const twitter = {
  icon: ["fab", "twitter"],
  url: "https://twitter.com/carriepascale",
}

const facebook = {
  icon: ["fab", "facebook-f"],
  url: "https://www.facebook.com/",
}

const instagram = {
  icon: ["fab", "instagram"],
  url: "https://www.instagram.com/",
}

const spainFlag = {
  src: spain,
  onClick: () => console.log("clicked"),
  alt: "The Spanish flag",
}

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 style={{ margin: 0 }}>
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
      <SocialIcon {...facebook} />
      <SocialIcon {...twitter} />
      <SocialIcon {...instagram} />
      <FlagIcon {...spainFlag} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
