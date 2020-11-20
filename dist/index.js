/*!
 * name: @jswork/next-filter-map
 * description: Filter after map for next use reduce.
 * homepage: https://github.com/afeiship/next-filter-map
 * version: 1.0.0
 * date: 2020-11-20 13:57:20
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.filterMap = function (inTarget, inFilter, inMapper) {
    return inTarget.reduce(function (filtered) {
      var args = nx.slice(arguments, 1);
      if (inFilter.apply(null, args)) {
        filtered.push(inMapper.apply(null, args));
      }
      return filtered;
    }, []);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filterMap;
  }
})();
