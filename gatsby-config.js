module.exports = {
  siteMetadata: {
    title: "Movement Kitchen",
    author: "Ivana Miletic Demmel",
    pathPrefix: "/",
    navigation: [
      {
        uri: "/",
        label: "Home",
        hero: "/walking_on_a_branch.jpg"
      },
      {
        uri: "about/",
        label: "About"
      },
      {
        uri: "movement-coaching/",
        label: "Movement coaching"
      },
      {
        uri: "courses-workshops/",
        label: "Courses and workshops"
      },
      {
        uri: "https://medium.com",
        label: "Blog"
      },
      {
        uri: "contact/",
        label: "Contact"
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
