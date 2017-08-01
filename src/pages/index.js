import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import Instagram from "../components/Instagram"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const homePageContent = get(this, "props.data.allMarkdownRemark.edges")[0].node;

    return (
      <div>
        <Helmet title={`${siteTitle} – ${homePageContent.frontmatter.title}`} />
        <div dangerouslySetInnerHTML={{ __html: homePageContent.html }} />
        <Instagram />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
