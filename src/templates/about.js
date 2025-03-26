import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';

import Bio from '../components/Bio';

class Page extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const pageTitle = get(this, 'props.data.markdownRemark.frontmatter.title');
    const pageContent = get(this, 'props.data.markdownRemark.html');

    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
        }}
      >
        <Helmet title={`${siteTitle} – ${pageTitle}`} />
        <Bio />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query AboutQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
