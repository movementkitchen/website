import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import { rhythm } from "../utils/typography"

class Page extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const pageTitle = get(this, "props.pathContext.title");
    const pageContent = get(this, "props.pathContext.html");

    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto'
        }}
      >
        <Helmet title={`${siteTitle} – ${pageTitle}`} />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </div>
    )
  }
}

Page.propTypes = {
  route: React.PropTypes.object,
}

export default Page

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`