import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
// import {Popup} from "../components/popup"

const SecondPage = () => (
  <Fragment>
    <SEO title="Page two" />
    {/* <Popup /> */}
    <Link to="/">Go back to the homepage</Link>
  </Fragment>
)

export default SecondPage
