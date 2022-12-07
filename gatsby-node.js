const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allBlogPosts: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/blog/" } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    template
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            allPages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/pages/" } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    template
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create pages.
        result.data.allPages.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(
              node.frontmatter.template
                ? `./src/templates/${node.frontmatter.template}.js`
                : './src/templates/page.js'
            ),
            context: {
              slug: node.fields.slug,
            },
          });
        });

        // Create blog posts.
        result.data.allBlogPosts.edges.forEach(({ node }) => {
          createPage({
            path: '/blog' + node.fields.slug,
            component: path.resolve(
              node.frontmatter.template
                ? `./src/templates/${node.frontmatter.template}.js`
                : './src/templates/blog-post.js'
            ),
            context: {
              slug: '/blog' + node.fields.slug,
              postPath: node.fields.slug,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
