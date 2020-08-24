(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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
