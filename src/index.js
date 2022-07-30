(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.filterMap = function (inTarget, inIterator) {
    return inTarget.reduce(function (acc, item, index) {
      const res = inIterator(item, index, inTarget);
      if (res[1]) acc.push(res[0]);
      return acc;
    }, []);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filterMap;
  }
})();
