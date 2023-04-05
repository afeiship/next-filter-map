type FmIterator = (item: any, index: number, target: any[]) => [boolean, any];

interface NxStatic {
  filterMap(target: any[], iterator: FmIterator): any;
}
