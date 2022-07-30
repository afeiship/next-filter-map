(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.filterMap filter after map', function () {
      const options = [
        { name: 'One', assigned: true },
        { name: 'Two', assigned: false },
        { name: 'Three', assigned: true }
      ];

      const reduced = nx.filterMap(options, (item) => [{ name: item.name }, item.assigned]);
      expect(reduced).toEqual([{ name: 'One' }, { name: 'Three' }]);
    });

    test('simple value shold worked', () => {
      const ints = [1, 2, 3, 4, 5];
      const result = nx.filterMap(ints, (item) => [item, item > 3]);
      expect(result).toEqual([4, 5]);
    });
  });
})();
