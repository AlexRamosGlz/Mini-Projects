function errorParser(err) {
  return { error: err.toString().slice(err.toString().indexOf(":") + 2) };
}

module.exports = errorParser;
