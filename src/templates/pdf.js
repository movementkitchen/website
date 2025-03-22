import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';

class PDFPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const pageTitle = get(this, 'props.data.markdownRemark.frontmatter.title');
    const pageContent = get(this, 'props.data.markdownRemark.html');
    const PDF_URL = get(this, 'props.data.markdownRemark.frontmatter.fileURL');

    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
        }}
      >
        <Helmet title={`${pageTitle} | ${siteTitle}`}>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        <a class="big" style={{ marginBottom: '1em' }} href={PDF_URL}>
          Download PDF
        </a>
        <object
          data={PDF_URL}
          type="application/pdf"
          style={{ width: '100%', height: '95vh' }}
        ></object>
      </div>
    );
  }
}

export default PDFPage;

export const pageQuery = graphql`
  query PDFPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        fileURL
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
