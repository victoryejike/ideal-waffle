import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css';

export default function Home({ data }) {
  console.log(data);
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Design and Develop</h3>
          <p>UX designer & web developer based in Nigeria.</p>
          <Link to='/projects' className={styles.btn}>My Portfolio projects</Link>
        </div>
        <img src='/banner.png' alt='site-banner' style={{ maxWidth: '100%' }}/>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  )
}

export const query = graphql
`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`