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
import "./layout.css"


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
    // <div className="imageWrapper">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header>
          <Header siteTitle={data.site.siteMetadata.title} />
        </header>

        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "aquamarine",
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    // </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
