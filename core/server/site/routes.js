const express = require('express');
const controllers = require('../controllers');

module.exports = function siteRouter () {
  const router = express.Router();

  router.get('/site', controllers.siteCtrl);

  router.get('/template', (req, res) => {
    res.render('normal/index');
  });

  return router;
};