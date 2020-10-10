import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { connect } from "react-redux"

import { SocialIcon, FlagIcon } from "./icons"
import { socialIcons } from "../constants/index"
import Hero from "./hero"

import "./header.css"
import "./heroImage.css"
import "./icons.css"

const usFlag = require("../images/US-flag-round-icon-128.png")
const spainFlag = require("../images/spain-flag-round-icon-128.png")

const Header = props => {
  const {spanishEnabled} = props
  const imageSrc = spanishEnabled ? usFlag : spainFlag

  return (
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
              {spanishEnabled ? 'Con Esta Luz' : "With This Light"}
            </Link>
          </h1>
        </div>
        <div className="header-icons">
          {socialIcons.map(icon => (
            <SocialIcon key={icon.id} {...icon} />
          ))}

          <FlagIcon src={imageSrc} />

          <div style={{ width: "25%", display: "flex", alignItems: "center" }}>
            <button
              className="language-toggle"
              onClick={() => props.toggleLanguage()}
              style={{
                color: "whitesmoke",
                textDecoration: "underline",
                marginLeft: "1em",
              }}
            >
              {spanishEnabled ? "English" : `Español`}
            </button>
          </div>
        </div>
      </header>
      <Hero />
    </Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = ({ spanishEnabled }) => {
  return { spanishEnabled }
}

const mapDispatchToProps = dispatch => {
  return { toggleLanguage: () => dispatch({ type: `TOGGLE_LANGUAGE` }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
