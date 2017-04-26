const models = require('../models');
const Promise = require('bluebird');
const parseCookies = require('./cookieParser');
const utils = require('../lib/hashUtils');

module.exports.createSession = (req, res, next) => {
  var cookie = {};

      if (Object.keys(req.cookies).length) {

      } else {
        req.session = {};
        req.session.hash = {};
        models.Sessions.create({hash: utils('shortlyid')});
        res.cookies['shortlyid'] = utils('shortlyid');
      }


  next();

};


/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

