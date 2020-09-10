module.exports = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    console.log("token inválido");
    return res.status(401).send(false);
  }

  if (token === process.env.PASSWORD) {
    next();
  } else {
    return res.status(500).send(false);
  }
};
