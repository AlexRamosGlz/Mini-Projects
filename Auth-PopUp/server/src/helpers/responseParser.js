function responseParser(response) {
  [this.response] = response[0];

  return this.response;
}

module.exports = responseParser;
