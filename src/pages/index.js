import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

import "../components/heroImage.css"

const IndexPage = () => (
  <div className="imageWrapper">
    <Layout>
      <SEO title="Home" />
      <Hero />
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
  </div>
)

export default IndexPage
