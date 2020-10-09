import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
import Triangle from "../components/triangle"

import "../components/heroImage.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Triangle> */}
      <Body />
    {/* </Triangle> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
