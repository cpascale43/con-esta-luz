import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
import Footer from "../components/footer"

import "../components/heroImage.css"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
    <SEO title="Home" />
    <Body />
    <Footer />
  </Layout>
)

export default IndexPage
