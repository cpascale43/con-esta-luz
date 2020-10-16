import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
import Footer from "../components/footer"

import "../components/heroImage.css"

const IndexPage = () => {
  const [popup, setPopup] = React.useState(null)

  React.useEffect(() => {
    // open after 2s for smoother experience
    const timer = setTimeout(() => {
      setPopup(
        <Helmet>
          <script src={withPrefix("in-memoriam.js")} type="text/javascript" />
        </Helmet>
      )
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (popup) {
    return (
      <Layout>
        {popup}
        <SEO title="Home" />
        <Body />
        <Footer />
      </Layout>
    )
  } else
    return (
      <Layout>
        <SEO title="Home" />
        <Body />
        <Footer />
      </Layout>
    )
}

export default IndexPage
