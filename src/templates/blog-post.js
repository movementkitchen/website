import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const {
      id,
      html,
      frontmatter: { title, subTitle, date, featuredImage },
    } = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
        }}
      >
        <Helmet title={`${title} | ${siteTitle}`} />
        <h1 style={{ ...scale(0.5), textAlign: 'center' }}>{title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            textAlign: 'center',
            marginBottom: rhythm(2),
            marginTop: rhythm(-0.5),
          }}
        >
          {date}
        </p>
        <p style={{ textAlign: 'center' }}>{subTitle}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($postPath: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      id
      html
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
