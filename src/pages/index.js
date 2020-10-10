import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"

import "../components/heroImage.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Body />
  </Layout>
)

export default IndexPage
