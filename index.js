'use strict';
require('dotenv').config();
require('./server/lib/DB');
const APP = require('./server/src/app');

/** Starting server */
(() => {
  APP.listen(APP.get('port'), () => {
    console.log('Server On port ', APP.get('port'));
  });
})();
