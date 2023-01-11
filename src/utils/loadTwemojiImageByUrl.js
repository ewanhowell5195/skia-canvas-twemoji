const { loadImage } = require('skia-canvas');

const cachedTwemojiImages = new Map();

module.exports =  async function loadTwemojiImageByUrl (url) {
  url = url.replace("https://twemoji.maxcdn.com/v/latest/", "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/")
  return new Promise(async (res) => {
    if (cachedTwemojiImages.has(url)) {
      return res(cachedTwemojiImages.get(url));
    }

    const image = await loadImage(url);
    cachedTwemojiImages.set(url, image);

    return res(image);
  });
}
