const sqlite3 = require('sqlite3').verbose();
const dbPath = __dirname+'/users.db';

const query = (queryText, params) => {
  let db = new sqlite3.Database(dbPath); 
  let result = db.run(queryText, params);
  db.close();
  return result;
}

let prepare = () => {
  query(`
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY,
  login TEXT NOT NULL UNIQUE,    
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);`);
}

let conn = () => {return new sqlite3.Database(dbPath)};

module.exports = { 
  prepare,
  query,
  conn
}