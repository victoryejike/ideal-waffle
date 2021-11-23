import { Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css';

export default function Home(props) {
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
      </section>
    </Layout>
  )
}