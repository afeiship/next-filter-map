# next-filter-map
> Filter after map for next use reduce.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-filter-map
```

## usage
```js
import '@jswork/next-filter-map';

const options = [
  { name: 'One', assigned: true },
  { name: 'Two', assigned: false },
  { name: 'Three', assigned: true }
];

const reduced = nx.filterMap(
  options,
  (item) => {
    return [item.assigned, { name: item.name }];
  }
);

// [ { name: 'One' }, { name: 'Three' } ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-filter-map/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-filter-map
[version-url]: https://npmjs.org/package/@jswork/next-filter-map

[license-image]: https://img.shields.io/npm/l/@jswork/next-filter-map
[license-url]: https://github.com/afeiship/next-filter-map/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-filter-map
[size-url]: https://github.com/afeiship/next-filter-map/blob/master/dist/next-filter-map.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-filter-map
[download-url]: https://www.npmjs.com/package/@jswork/next-filter-map
