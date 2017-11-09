const startTime = Date.now();
const debug = require('ghost-ignition').debug('boot:index');
let app = require('./core');

app().start()
  // .then(() => {
  //   console.log(`App boot ${(Date.now() - startTime) / 1000} s.`);
  // })
  // .catch(() => {
  //   console.log('Error happened when app boot');
  //   process.exit(-1);
  // })