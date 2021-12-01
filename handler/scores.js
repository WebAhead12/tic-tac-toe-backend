const model = require("../model/scores");
const utils = require("../utils/utilities");

const getScore = (req, res) => {
  const id = req.params.id;
  model //get score from database
    .getScore(id)
    .then((results) => {
      if (!results.length) {
        utils.throwError("There is no data for this account", 404);
      } else {
        const [data] = results; //results is an array with 1 item [{wins,total}]
        res.status(200).send(data);
      }
    })
    .catch((error) => res.send({ error: error.message }));
};

//update score
const updateScore = (req, res) => {
  const data = req.body;

  model //insert data into scores table
    .updateScore(data)
    .then(() => res.status(200).send({ response: "successful" }))
    .catch((error) =>
      res.send({ error: "Unable to update the score | " + error.message })
    );
};

module.exports = { getScore, updateScore };
