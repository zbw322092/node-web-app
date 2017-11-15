const debug = require('ghost-ignition').debug('app');
const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const compression = require('compression');
const config = require('./config');
const logRequest = require('./middleware/log-request.js');

module.exports = () => {
  debug('ParentApp setup start');
  
  const parentApp = express();

  parentApp.set('views', path.join(process.cwd(), config.get('paths:defaultViews')));

  const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(parentApp.get('views'), "layouts"), 
    partialsDir: path.join(parentApp.get('views'), "partials"), 
    helpers: helpers
  });

  parentApp.engine('.hbs', hbs.engine);
  parentApp.set('view engine', '.hbs');

  parentApp.enable('trust proxy');

  parentApp.use(logRequest);

  if (config.get('compress') !== false) {
    parentApp.use(compression());
  }

  parentApp.get('/template', (req, res) => {
    res.render('normals/index');
  });

  parentApp.use(require('./site')());

  debug('ParentApp setup end');

  return parentApp;
}