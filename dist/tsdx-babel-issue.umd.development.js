(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('lodash-es'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'lodash-es'], factory)
    : ((global = global || self),
      factory((global['tsdx-babel-issue'] = {}), global.lodashEs));
})(this, function(exports, lodashEs) {
  'use strict';

  const sum = (a, b) => {
    {
      console.log(lodashEs.kebabCase('foo bar'));
    }

    return a + b;
  };

  exports.sum = sum;
});
//# sourceMappingURL=tsdx-babel-issue.umd.development.js.map
