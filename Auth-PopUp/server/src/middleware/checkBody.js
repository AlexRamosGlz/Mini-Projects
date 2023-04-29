function chekBody(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: "body can't be empty" });

  next();
}

module.exports = chekBody;
