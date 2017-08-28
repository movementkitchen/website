const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/page.js")
    resolve(
      graphql(
      `
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                html
                frontmatter {
                  template
                  path
                  title
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: edge.node.frontmatter.template ? path.resolve(`./src/templates/${edge.node.frontmatter.template}.js`) : pageTemplate,
            context: {
              path: edge.node.frontmatter.path,
              title: edge.node.frontmatter.title,
              html: edge.node.html,
            },
          })
        })
      })
    )
  })
}
