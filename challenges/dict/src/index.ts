// export type Dict = {};
//
// // Array.prototype.map, but for Dict
// export function mapDict() {}
//
// // Array.prototype.reduce, but for Dict
// export function reduceDict() {}

// create generic dictionary type
export type Dict<T> = {
  [key: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== 'undefined') {
      out[dKey] = fn(thisItem, idx)
    }
  });
  return out;
}
 // example function call for map
mapDict({
  a: 'a',
  b: 'b'
}, (str) => [str]) // alternative to [str]  would return wrapped vals >> ({ val: str}))


// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
  dict: Dict<T>,
  // create reducer callback - takes (acc, curr, idx) as (val, item, idx)
  reducer: (val: S, item: T, idx: number) => S,
  initialVal: S
) {
  let val: S = initialVal;
  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== 'undefined') {
      val = reducer(val,thisItem, idx)
    }
  });
  return val;
}
