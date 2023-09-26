const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3); // To add key-value pair
map.delete("b"); // To delete key-value pair
// map.clear();
console.log(map.has("a")); // To check size of map
console.log(map.size); // To check Existance of key-value pair

console.log(map);

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
