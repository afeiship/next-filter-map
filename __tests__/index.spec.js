require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('nx.filterMap filter after map', function () {
    const options = [
      { name: 'One', assigned: true },
      { name: 'Two', assigned: false },
      { name: 'Three', assigned: true }
    ];

    const reduced = nx.filterMap(options, (item) => [item.assigned, { name: item.name }]);
    expect(reduced).toEqual([{ name: 'One' }, { name: 'Three' }]);
  });

  test('simple value shold worked', () => {
    const ints = [1, 2, 3, 4, 5];
    const result = nx.filterMap(ints, (item) => [item > 3, item]);
    expect(result).toEqual([4, 5]);
  });
});
