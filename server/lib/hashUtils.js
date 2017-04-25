const crypto = require('crypto');


var HashFunction = (password) => {
  var hash = crypto.createHmac('sha256', password).digest('hex'); 
  return hash;
}

module.exports = HashFunction;