const db = require("../database/connection");

//get user row frm database
const getUser = (user) => {
  return db.query(`SELECT * FROM users`).then((result) => {
    const users = result.rows; //[{account1},{account2}...]

    if (!users.length)
      throw new Error(`Something wrong, could not get data from the database`);

    return users.filter((account) => account.username == user); //array with one account if exists
  });
};

//insert registered user to database
const setUser = (account) => {
  const values = [account.username, account.password];
  return db.query(
    `INSERT INTO users(username, password) VALUES($1, $2)`,
    values
  );
};

module.exports = { getUser, setUser };
