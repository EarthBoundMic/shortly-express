const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  // Create links table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS links (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      url VARCHAR(255),
      baseUrl VARCHAR(255),
      code VARCHAR(5),
      title VARCHAR(255),
      visits INT NOT NULL DEFAULT 0,
      timestamp TIMESTAMP
    );`)
    .then(() => {
      // Create clicks table
      return db.queryAsync(`
        CREATE TABLE IF NOT EXISTS clicks (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          linkId INT,
          timestamp TIMESTAMP
        );`);
    }).then(() => {
      return db.queryAsync(`
        CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(200) UNIQUE,
        password VARCHAR(200) NOT NULL,
        timestamp TIMESTAMP
        );`);
    })

    .error(err => {
      console.log(err);
    });
};
