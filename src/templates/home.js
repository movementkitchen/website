import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Instagram from '../components/Instagram';
import Testimonials from '../components/Testimonials';
import Head from '../components/Head';
import { rhythm } from '../utils/typography';

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const pageTitle = get(this, 'props.data.markdownRemark.frontmatter.title');
    const pageContent = get(this, 'props.data.markdownRemark.html');
    // const posts = get(this, 'props.data.allPostsJson').edges.map((e) => e.node);
    const testimonials = get(this, 'props.data.markdownRemark.frontmatter.testimonials');

    return (
      <div
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: '0 auto',
        }}
      >
        {/* <Helmet title={`${siteTitle} – ${pageTitle}`} /> */}
        <Head />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        {/* <Instagram posts={posts} /> */}
        <h3>Where to find us</h3>
        <iframe
          style={{
            width: '100%',
            height: '50vh',
            marginBottom: rhythm(2),
          }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9087.014566459668!2d-0.03998082621051141!3d51.564043040424174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c47a16c9833%3A0x63290ee9190cbacb!2sMovement%20Kitchen!5e0!3m2!1sen!2sus!4v1670433805610!5m2!1sen!2sus"
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
    markdownRemark(fields: { slug: { eq: $slug }, type: { eq: "page" } }) {
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
