module.exports = {
  siteMetadata: {
    title: 'Movement Kitchen',
    author: 'Ivana Miletic Demmel',
    siteUrl: 'https://movementkitchen.co.uk/',
    pathPrefix: '/',
    navigation: [
      {
        uri: '/',
        label: 'Home',
        hero: '/images/stepping_up.jpg',
      },
      {
        uri: '/about/',
        label: 'About',
        hero: '/images/About-hero.jpg',
      },
      {
        uri: '/movement-coaching/',
        label: 'Coaching',
        hero: '/images/walking_on_a_branch.jpg',
      },
      {
        uri: '/courses-workshops/',
        label: 'Workshops',
        hero: '/images/beach_ride.jpg',
      },
      // {
      //   uri: '/resources/',
      //   label: 'Resources',
      //   hero: '/images/massage_table.jpg',
      // },
      // {
      //   uri: '/mini-urban-retreats/',
      //   label: 'Mini urban retreats',
      //   hero: '/images/beach_ride.jpg',
      // },
      {
        uri: '/blog/',
        label: 'Blog',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
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
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: 'custom-block-danger',
                info: 'custom-block-info',
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-41004656-2`,
      },
    },
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
