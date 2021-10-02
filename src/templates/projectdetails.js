import React from 'react'
import Layout from '../Components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styles from '../styles/global.css'
import { graphql } from 'gatsby'

export default function projectdetails({ data }) {
  const { html } = data.markdownRemark
  const { title, format, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div>
        <h2 className="details">{title}</h2>
        <h3>{format}</h3>
        <div className="imgdeets">
          <GatsbyImage image={featuredImg.childImageSharp.fluid}/>
        </div>
        <div className="htmls" dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`