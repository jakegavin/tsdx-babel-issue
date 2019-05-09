(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('lodash'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'lodash'], factory)
    : ((global = global || self),
      factory((global['tsdx-babel-issue'] = {}), global.lodash));
})(this, function(exports, lodash) {
  'use strict';

  const sum = (a, b) => {
    {
      console.log(lodash.kebabCase('foo bar'));
    }
    return a + b;
  };

  exports.sum = sum;
});
//# sourceMappingURL=tsdx-babel-issue.umd.development.js.map
