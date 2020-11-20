(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.filterMap filter after map', function () {
      const options = [
        { name: 'One', assigned: true },
        { name: 'Two', assigned: false },
        { name: 'Three', assigned: true }
      ];

      const reduced = nx.filterMap(
        options,
        (item) => item.assigned,
        (item) => {
          return { name: item.name };
        }
      );
      expect(reduced).toEqual([{ name: 'One' }, { name: 'Three' }]);
    });
  });
})();
