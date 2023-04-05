import nx from '@jswork/next';

nx.filterMap = function (inTarget, inIterator) {
  return inTarget.reduce(function (acc, item, index) {
    const res = inIterator(item, index, inTarget);
    if (res[0]) acc.push(res[1]);
    return acc;
  }, []);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.filterMap;
}

export default nx.filterMap;
