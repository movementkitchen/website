const fs = require(`fs`);
const bodyParser = require('body-parser');
const pathMaker = require('path');

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
        hero: '/images/walking_on_a_branch.jpg',
      },
      {
        uri: '/about/',
        label: 'About',
        hero: '/images/About-hero.jpg',
      },
      {
        uri: '/movement-coaching/',
        label: 'Coaching',
        hero: '/images/stepping_up.jpg',
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

  developMiddleware: (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/new-post', (req, res) => {
      res.send(`
        <form action="/new-post" method="post">
          <label for="title">Title (write as you want it to be shown, e.g. My Title-case Title):</label><br>
          <input type="text" id="title" name="title"><br><br>
          <label for="subTitle">Subtitle:</label><br>
          <input type="text" id="subTitle" name="subTitle"><br><br>
          <label for="tags">Tags (comma separated, without quotes, like: exercise, women's health, yay):</label><br>
          <input type="text" id="tags" name="tags"><br><br>
          <label for="date">Date (today's date prefilled, feel free to edit, but keep the format and don't worry about the time as only the date is shown on the website):</label><br>
          <input type="text" id="date" name="date" value="${new Date().toISOString()}"><br><br>
          <label for="path">Path (will be like "title-with-dashes" if left empty, if you fill it in don't put slashes):</label><br>
          <input type="text" id="path" name="path"><br><br>
          <input type="submit" value="Submit">
        </form>
      `);
    });
    app.post('/new-post', (req, res) => {
      const { title, subTitle, tags, date, path } = req.body;
      const postPath = newPost(title, subTitle, tags, date, path);
      res.send(
        `<script type="text/javascript">
          setTimeout(() => {}, 2 * 1000);
          window.location.replace("blog/${postPath}");
        </script>
        <h2>Generating blog post, one sec...</h2>
        `
      );
    });
  },
};

const newPost = (title, subTitle, tags, date, path) => {
  // Duplicate "src/blogPostTemplate" directory to "src/blog" and update Markdown front matter in
  // index.md with arguments passed into the function. If not specified, "date" should default to
  // today and "path" should be kebab-case version of title.
  // Front matter field examples:
  // title: "Blog Post Template"
  // subTitle: "Subtitle"
  // date: "2015-11-09T10:00:00.000Z"
  // path: "/blog-post-template/"
  // tags: ["biomechanics", "women's health"]
  // featuredImage: kite.jpeg

  const blogDate = date || new Date().toISOString();
  const blogPath = path || title.toLowerCase().replace(/ /g, '-');
  const newDirPath = `src/blog/${blogPath}`;
  const templateDirPath = 'blogPostTemplate';

  fs.mkdirSync(newDirPath);

  fs.readdirSync(templateDirPath).forEach((file) => {
    const filePath = pathMaker.join(templateDirPath, file);
    const newFilePath = pathMaker.join(newDirPath, file);
    let fileContent;
    if (file.includes('index.md')) {
      fileContent = fs
        .readFileSync(filePath, 'utf8')
        .replace(/{{title}}/g, title)
        .replace(/{{subTitle}}/g, subTitle)
        .replace(/{{date}}/g, blogDate)
        .replace(/{{path}}/g, `/${blogPath}/`)
        .replace(
          /{{tags}}/g,
          tags
            ? `["${tags
                .split(',')
                .reduce(
                  (acc, item, index) =>
                    index > 0 ? acc + '", "' + item.trim() : acc + item.trim(),
                  ''
                )}"]`
            : '[]'
        );
    } else {
      fileContent = fs.readFileSync(filePath);
    }
    fs.writeFileSync(newFilePath, fileContent);
  });

  return blogPath;
};
