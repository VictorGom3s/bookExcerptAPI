const texts = require("../public/texts");

class TextsController {
  /* just get a random text from the json and return it */
  static getRandomText(req, res) {
    const randomIndex = Math.floor(Math.random() * 4);
    res.send(texts[randomIndex]);
  }
}

module.exports = TextsController;
