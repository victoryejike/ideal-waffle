import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects ({ data }) {
  console.log(data);
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  // const images = getImage(data.projects.nodes.frontmatter.thumb.childImageSharp.gatsbyImageData.images.fallback.src)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites I have created</h3>
        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={ `/projects/${project.frontmatter.slug}` } key={project.id} >
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt='Banner' />
                  <h3>{ project.frontmatter.title }</h3>
                  <p>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))
          }
        </div>
        <p>Like what you see? Email me at <strong>{ contact }</strong> for a quote</p>
      </div>
    </Layout>
  )
}

export const query = graphql
`
  query MyQuery {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`