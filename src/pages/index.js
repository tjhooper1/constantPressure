import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.main_container}>
      <h1 className="text-primary">
        We specialize in Commercial or Residential properties
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  </Layout>
)

export default IndexPage
