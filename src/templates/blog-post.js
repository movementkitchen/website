import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const {
      html,
      frontmatter: { path, title, subTitle, date, tags, featuredImage: {childImageSharp: {sizes: {src}}} },
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
        <Helmet>
          <title>{`${title} | ${siteTitle}`}</title>
          <meta name="description" content={`${subTitle} | ${tags.join(', ')}`} />
          <meta http-equiv='content-language' content='en-gb' />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://www.movementkitchen.co.uk/blog${path}`} />
          <meta property="og:title" content={`${title} | ${siteTitle}`} />
          <meta property="og:description" content={`${subTitle} | ${tags.join(', ')}`} />
          <meta property="og:image" content={`https://www.movementkitchen.co.uk${src}`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://www.movementkitchen.co.uk/blog${path}`} />
          <meta property="twitter:title" content={`${title} | ${siteTitle}`} />
          <meta property="twitter:description" content={`${subTitle} | ${tags.join(', ')}`} />
          <meta property="twitter:image" content={`https://www.movementkitchen.co.uk${src}`} />
        </Helmet>
        <h1 style={{ ...scale(0.5), textAlign: 'center' }}>{title}</h1>
        {date && 
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
        }
        {subTitle && <p style={{ textAlign: 'center' }}>{subTitle}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
        tags
        path
        featuredImage {
          childImageSharp {
            sizes {
              src
            }
          }
        }
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
