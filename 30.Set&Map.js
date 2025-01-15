// Set
const set1 = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log(set1);

const set2 = new Set('Hello');
console.log(set2);

set1.add(6);
console.log(set1);

console.log(set1.has(3));
console.log(set1.has(10));

console.log(set1.delete(2));
console.log(set1);

set2.clear();
console.log(set2);

set1.forEach(value => console.log(value));


// Map
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(map);

map.set('key3', 'value3');
console.log(map);

console.log(map.get('key1'));
console.log(map.get('key4'));

console.log(map.has('key2'));
console.log(map.has('key4'));

console.log(map.delete('key2'));
console.log(map);

map.clear();
console.log(map);

const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log([...map2.keys()]); // ['a', 'b', 'c']
console.log([...map2.values()]); // [1, 2, 3]
console.log([...map2.entries()]); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

map2.forEach(
    (value, key) => console.log(key, value)
);