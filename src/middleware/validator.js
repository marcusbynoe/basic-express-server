'use strict';

const validator = (req, res, next) => {
  if (req.query?.name) {
    req.name = req.query.name
  } else {

    next('Need name in query!')

  }
}

module.exports = validator;