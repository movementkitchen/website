import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Instagram from '../components/Instagram';
import Testimonials from '../components/Testimonials';
import { rhythm } from '../utils/typography';

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const pageTitle = get(this, 'props.data.markdownRemark.frontmatter.title');
    const pageContent = get(this, 'props.data.markdownRemark.html');
    // const posts = get(this, 'props.data.allPostsJson').edges.map((e) => e.node);
    const testimonials = get(
      this,
      'props.data.markdownRemark.frontmatter.testimonials'
    );
    
    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
        }}
      >
        <Helmet title={`${siteTitle} – ${pageTitle}`} />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        {/* <Bio /> */}
        {/* <Instagram posts={posts} /> */}
        <iframe
          style={{
            width: '100%',
            height: '50vh',
            marginBottom: rhythm(2),
          }}
          src="https://maps.google.com/maps?q=movement%20kitchen&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
        />
        <Testimonials testimonials={testimonials} />
      </div>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query IndexQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        testimonials {
          url
          text
          name
          avatar
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    # allPostsJson(limit: 6) {
    #   edges {
    #     node {
    #       id
    #       code
    #       text
    #       smallImage: image {
    #         childImageSharp {
    #           small: responsiveSizes(maxWidth: 250, maxHeight: 250) {
    #             src
    #             srcSet
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;
