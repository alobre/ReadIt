let Tesseract = require("tesseract.js");

function convertImgToText(file, callback) {
    Tesseract.recognize(
      file,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      callback(text);
    })
}

module.exports = { convertImgToText };
