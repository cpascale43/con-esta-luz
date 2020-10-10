import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
import Footer from "../components/footer"

import "../components/heroImage.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Body />
    <Footer />
  </Layout>
)

export default IndexPage
