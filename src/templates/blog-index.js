import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { MIN_DEFAULT_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { rhythm, scale } from '../utils/typography';

const BlogPostExcerptList = styled.ul`
  list-style-type: none;
  margin: ${rhythm(1)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogPostExcerpt = styled.li`
  flex: 0 1 100%;
  margin: ${rhythm(1)} 0;
  display: flex;
  flex-direction: column;

  ${MIN_DEFAULT_MEDIA_QUERY} {
    flex: 0 1 30%;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const pageLinks = [];
    const posts = get(this, 'props.data.allBlogPosts.edges');
    posts.forEach(({ node: { frontmatter, excerpt } }) => {
      // console.log(frontmatter);
      pageLinks.push(
        <BlogPostExcerpt key={frontmatter.path}>
          <Link
            style={{ boxShadow: 'none', textDecoration: 'none' }}
            to={'/blog' + frontmatter.path}
          >
            <h2 style={{ marginBottom: rhythm(0.5) }}>{frontmatter.title}</h2>
          </Link>
          <p>{frontmatter.subTitle}</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-0.25),
            }}
          >
            {frontmatter.date}
          </p>
          {frontmatter.featuredImage && (
            <Link
              style={{
                display: 'inline-block',
                boxShadow: 'none',
                height: '280px',
                width: '100%',
                marginTop: 'auto',
                marginBottom: rhythm(0.5)
              }}
              to={'/blog' + frontmatter.path}
            >
              <img
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                src={
                  frontmatter.featuredImage.childImageSharp.responsiveSizes.src
                }
                srcSet={
                  frontmatter.featuredImage.childImageSharp.responsiveSizes
                    .srcSet
                }
              />
            </Link>
          )}
          <p>{excerpt}</p>
        </BlogPostExcerpt>
      );
    });
    return (
      <div>
        <Helmet title="Blog" />
        <h2
          style={{
            ...scale(0.5),
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
            textAlign: 'center',
          }}
        >
          Blog archives
        </h2>
        <BlogPostExcerptList>{pageLinks}</BlogPostExcerptList>
      </div>
    );
  }
}

// BlogIndex.propTypes = {
//   route: React.PropTypes.object,
// };

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allBlogPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { date: { ne: null } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subTitle
            date(formatString: "DD MMMM YYYY")
            path
            featuredImage {
              childImageSharp {
                responsiveSizes {
                  src
                  srcSet
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;
