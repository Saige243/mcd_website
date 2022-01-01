import React from "react"
import "../styles/global.css"
import Layout from '../Components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


function HomePage ({ data }) {
  const projects = data.allMarkdownRemark.nodes
  console.log(data)
  return (
    <div>
        <Layout>
          <div className="workcontainer">
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                  <div className="workinfo">
                      <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                      {/* <h3 className="worktitle">{ project.frontmatter.title }</h3>
                      <p>{ project.frontmatter.format }</p> */}
                  </div>
              </Link>
            ))}
          </div>
        </Layout>
    </div>
  )
}

export default HomePage

export const query = graphql`
query PortfolioPage {
  allMarkdownRemark(filter: {}, sort: {fields: frontmatter___format, order: ASC}) {
    nodes {
      frontmatter {
        format
        slug
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`

