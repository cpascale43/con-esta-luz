import React, { useEffect } from "react"

import { popupScript } from "../../script";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Body from "../components/body"
import Footer from "../components/footer"

import "../components/heroImage.css"

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script")

    // why does this have to be in template literals?

    script.innerHTML = `${popupScript}`
    script.type = "text/javascript"
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Body />
      <Footer />
    </Layout>
  )
}

export default IndexPage
