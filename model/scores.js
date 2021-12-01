const db = require("../database/connection");

//get user score
const getScore = (id) => {
  return db
    .query(`SELECT wins, total FROM scores WHERE user_id = ${id}`)
    .then((result) => {
      const userData = result.rows;
      return userData;
    });
};

//insert score to scores table, data is an object
const setScore = (data) => {
  const values = [data.wins, data.total, data.userID];
  return db
    .query(
      `INSERT INTO scores(wins, total, user_id) VALUES($1, $2, $3)`,
      values
    )
    .catch((error) => console.error("Insertion error | " + error.message));
};

//update scores, data is an object, data = {wins: , total: , userID:}
const updateScore = (data) => {
  return db.query(
    `UPDATE scores SET wins = ${data.wins}, total = ${data.total} WHERE user_id = ${data.userID}`
  );
};

module.exports = { getScore, setScore, updateScore };
