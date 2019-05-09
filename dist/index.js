'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tsdx-babel-issue.cjs.production.js');
} else {
  module.exports = require('./tsdx-babel-issue.cjs.development.js');
}
