import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
// import Popup from "../components/popup"

import "../components/heroImage.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Body />
    {/* <Link to="/page-2">Check out my PAGE 2</Link>! */}
  </Layout>
)

export default IndexPage
