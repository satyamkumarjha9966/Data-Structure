const set = new Set([1, 2, 3, 4]);

set.add(5); // To add element
set.add(5); // It does not consider it because it ignore duplicate value
set.delete(3); // To delete element
console.log(set.has(1)); // To check Existance of element
console.log(set.size); // To check size of set
// console.log(set.clear());

console.log(set);

for (const item of set) {
  console.log(item);
}
