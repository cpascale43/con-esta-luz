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

import miraflores from "../images/miraflorescolorlogo.png"

import "./layout.css"
import "./heroImage.css"

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

      <footer style={{ marginBottom: "1em" }}>
        Produced by Miraflores Films LLC{" "}
        <img src={miraflores} style={{ width: `5%`, margin: 0 }} />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
