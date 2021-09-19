import * as React from "react"
import Layout from "../components/Layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>Gatsby Tutorial</p>
      <p>Scooby Doo</p>
    </Layout>
  )
}

export default IndexPage
