// delay.js
module.exports = (req, res, next) => {
  setTimeout(() => next(), 500);
};
