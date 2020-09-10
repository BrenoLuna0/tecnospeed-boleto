module.exports = async (req, res, next) => {
  const token = req.headers["token"];
  if (!token) {
    console.log("token nao existe");
    return res.status(401).send(false);
  }

  if (token === process.env.PASSWORD) {
    next();
  } else {
    console.log("token inválido");
    return res.status(500).send(false);
  }
};
