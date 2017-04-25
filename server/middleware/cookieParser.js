const parseCookies = (req, res, next) => {
  let cookies = ("" + req.headers.cookie).split("=");
  let newCookies = [];
  let parsedCookies = {};
  if (req.headers.cookie) {
    for( var i = 0; i < cookies.length; i++) {
      if(cookies[i].includes(';')) {
        cookies[i] = cookies[i].split('; ');
      }
    }
    cookies.forEach((cookie) => {
      if (Array.isArray(cookie)) {
        for(var j = 0; j < cookie.length; j++) {
          newCookies.push(cookie[j]);
        }
      } else {
        newCookies.push(cookie);
      }
    })
    for(var k = 0; k < newCookies.length; k += 2) {
      parsedCookies[newCookies[k]] = newCookies[k + 1];
    } 
  req.cookies = parsedCookies;
  }
	next();
};

module.exports = parseCookies;