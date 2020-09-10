const fs = require(`fs`);
const got = require(`got`);
const mkdirp = require(`mkdirp`);
const rimraf = require(`rimraf`);
const ProgressBar = require(`progress`);
const { get } = require(`lodash`);
const download = require(`./utils/download-file`);
const xmlParser = require('fast-xml-parser');

// Create the progress bar
const bar = new ProgressBar(
  `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
);

const NUMBER_OF_POSTS_TO_GET = 6;

rimraf.sync(`./data`);
mkdirp.sync(`./data/images`);

let posts = [];

// Write json
const saveJSON = (_) =>
  fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, ``, 2));

const getRSSPosts = async (_) => {
  const url = `https://rss.app/feeds/7BFqMbQBJ6YkgOjD.xml`;

  try {
    const response = await got(url, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:80.0) Gecko/20100101 Firefox/80.0',
      },
    });
    console.log('statusCode:', response.statusCode);

    const body = xmlParser.convertToJson(
      xmlParser.getTraversalObj(response.body, {}),
      {}
    );

    console.log('jsonObj:', body);

    body.rss.channel.item
      .map((item) => {
        const shortcode = get(item, `link`).match(
          /https:\/\/www.instagram.com\/p\/(.*)/
        )[1];
        const image = get(item, `description`).match(
          /<img src="(.*)" style="width: 100%;">/
        )[1];
        return {
          id: get(item, `guid`),
          code: shortcode,
          time: get(item, `pubDate`),
          text: get(item, `title`),
          media: image,
          image: `images/${shortcode}.jpg`,
        };
      })
      .forEach((item) => {
        if (posts.length >= NUMBER_OF_POSTS_TO_GET) return;

        // Download image locally and update progress bar
        bar.total++;
        download(item.media, `./data/images/${item.code}.jpg`, (_) =>
          bar.tick()
        );

        // Add item to posts
        posts.push(item);
      });

    saveJSON();
  } catch (error) {
    console.log('error:', error);
  }
};

getRSSPosts();
