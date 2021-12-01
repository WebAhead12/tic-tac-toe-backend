//middleware, check if there is token and assign it to the request.
const doVerify = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" "); // ['bearer', 'token']
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //no token => Fordidden response
    res.status(403).send({ error: "no token, no access" });
  }
};

module.exports = { doVerify };
