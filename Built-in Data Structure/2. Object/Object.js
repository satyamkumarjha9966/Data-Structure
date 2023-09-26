const obj = {
  name: "satyam",
  age: 22,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name); // "this" Indicates the obj Object
  },
};

obj.hobby = "cricket"; // To Add Key-Value Pairs in Object
delete obj.hobby; // To Delete Key-Value Pairs in Object

obj.sayMyName(); // To call function in object

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]); // Generally we use this methods when key written using "hyphens" or "space"

console.log(Object.keys(obj)); // It return all keys of object in "Array"
console.log(Object.values(obj)); // It return all values of object in "Array"
console.log(Object.entries(obj)); // It return object and its key-values pairs in "Array"
