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

//get User ID
const getUserID = (user) => {
  return getUser(user).then((accArray) => {
    //account array of 1 item
    const [account] = accArray;
    if (!accArray.length) {
      throw new Error(`This ${user} doesn't exist`);
    } else {
      return account.id;
    }
  });
};

//insert registered user to database
const setUser = (account) => {
  const values = [account.username, account.fullName, account.password];
  return db.query(
    `INSERT INTO users(username, name, password) VALUES($1, $2, $3)`,
    values
  );
};

//get user info by id
const getUserIfnoByID = (id) => {
  return db
    .query(`SELECT id, username, name FROM users WHERE id = ${id}`)
    .then((result) => {
      const userInfo = result.rows;
      return userInfo;
    });
};

module.exports = { getUser, setUser, getUserIfnoByID, getUserID };
