const fs = require(`fs`);
const mkdirp = require(`mkdirp`);
const rimraf = require(`rimraf`);
const ProgressBar = require(`progress`);
const { get } = require(`lodash`);
const download = require(`./utils/download-file`);
const userInstagram = require('user-instagram');

const username = process.argv[2];

if (!username) {
  console.log(
    `
You didn't supply an Instagram username!
Run this command like:

node scrape.js INSTAGRAM_USERNAME
    `
  );
  process.exit();
}

// Convert timestamp to ISO 8601.
const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON();

// Create the progress bar
const bar = new ProgressBar(
  `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
);

rimraf.sync(`./data`);
mkdirp.sync(`./data/images`);

let posts = [];

// Write json
const saveJSON = _ =>
  fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, ``, 2));

const getPosts = _ => {
  userInstagram('movementkitchen') // Same as getUserData()
  .then(data => {
    data.posts
      .map((item) => {
        // Parse item to a simple object
        return {
          id: get(item, `id`),
          code: get(item, `shortCode`),
          time: toISO8601(get(item, `timestamp`)),
          isVideo: get(item, `isVideo`),
          likes: get(item, `likesCount`),
          comment: get(item, `commentsCount`),
          text: get(item, `caption`),
          media: get(item, `imageUrl`),
          image: `images/${item.shortCode}.jpg`,
          username: get(data, `username`),
          avatar: get(data, `profilePic`),
        };
      })
      .forEach(item => {
        if (posts.length >= 6) return;

        // Download image locally and update progress bar
        bar.total++;
        download(item.media, `./data/images/${item.code}.jpg`, _ => bar.tick());

        // Add item to posts
        posts.push(item);
      });

    saveJSON();
  })
  .catch(console.error);
};

getPosts();
