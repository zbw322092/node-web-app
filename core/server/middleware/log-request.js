const uuidv1 = require('uuid/v1');
const logging = require('../logging.js');

module.exports = (req, res, next) => {
  const startTime = Date.now();
  /**
   * References about 'X-Request-ID'
   * 1 https://stackoverflow.com/a/27174552
   * 2. https://devcenter.heroku.com/articles/http-request-id
   * 3. https://atech.blog/viaduct/x-request-id
   */
  const requestId = req.get('X-Request-ID') || uuidv1();

  const logResponse = () => {
    res.responseTime = (Date.now() - startTime) + 'ms';
    req.requestId = requestId;
    req.userId = req.user ? (req.user.id ? req.user.id : req.user) : null;

    if (req.err && req.err.statusCode !== 404) {
      logging.error({ req: req, res: res, err: req.err });
    } else {
      logging.info({req: req, res: res});
    }

    res.removeListener('finish', logResponse);
    res.removeListener('close', logResponse);
  };

  res.on('finish', logResponse);
  res.on('close', logResponse);
  next();
};