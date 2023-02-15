'use strict';

const logger = (req, res, next) => {
  console.log(req.path)
}

module.exports = logger;