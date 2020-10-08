/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import { PartnerIcon } from "./icons"
import fohcLogo from "../images/Partner Logos/FoHC_Logo.svg"
import fundacionLogo from "../images/Partner Logos/Fundacion.png"
import hcrfLogo from "../images/Partner Logos/hcrf-new-logo-feb-20220.png"
import sanLogo from "../images/Partner Logos/InProduction-SAN-Logo.jpg"
import virtuLogo from "../images/Partner Logos/Virtu.png"

import "./layout.css"
import "./heroImage.css"

const partnerLogos = [
  { id: 0, src: hcrfLogo, alt: "" },
  { id: 1, src: virtuLogo, alt: "" },
  { id: 2, src: fohcLogo, alt: "" },
  { id: 3, src: sanLogo, alt: "" },
  { id: 4, src: fundacionLogo, alt: "" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        // maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="imageWrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

      <main
        style={{
          flexGrow: 1,
        }}
      >
        {children}
      </main>

      <footer style={{marginBottom: '1em'}}>
        <div className="row d-flex justify-content-center align-items-baseline">
          {partnerLogos.map(logo => (
            <PartnerIcon key={logo.id} {...logo} />
          ))}
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
