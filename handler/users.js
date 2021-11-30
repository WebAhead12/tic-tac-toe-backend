const model = require("../model/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const utils = require("../utils/utilities");
const bcrypt = require("bcryptjs");

dotenv.config();

const SECRET = process.env.SECRET;

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  model
    .getUser(username)
    .then((acc) => {
      if (!acc.length) {
        //account doesnt exist
        utils.throwError(`Login unauthorized, ${username} is not found`, 401);
      }
      const [account] = acc; //account is obj {id, username, password}, acc is array with 1 obj.

      bcrypt //hash the given password using bcrypt.compate and compare it to the password is database.
        .compare(password, account.password)
        .then((match) => {
          if (!match) {
            utils.throwError("Login unauthorized, Password mismatch", 401);
          } else {
            const token = jwt.sign({ user: account.id }, SECRET, {
              expiresIn: "1h",
            });
            res.status(200).send({ access_token: token, error: "" });
          }
        })
        .catch((error) => {
          res.send({ error: "An expected error" });
        });
    })
    .catch((error) => res.send({ error: error.message }));
};

const register = (req, res) => {
  const account = req.body;
  //check if account exists.
  model
    .getUser(account.username)
    .then((acc) => {
      if (acc.length) {
        //account exist
        utils.throwError(`${account.username} already taken`, 403);
      } else {
        //hash password then set a new account
        bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(account.password, salt))
          .then((hash) =>
            //set user with the hashed password
            model
              .setUser({ ...account, password: hash })
              .then(() => {
                //   res.redirect("/users/login");
                res.send({ response: "successful" });
              })
              .catch((error) =>
                res.send({
                  error:
                    "Somthing worng, Unable to set an account | " +
                    error.message,
                })
              )
          );
      }
    })
    .catch((error) => {
      res.send({ error: error.message });
    });
};

module.exports = { login, register };
