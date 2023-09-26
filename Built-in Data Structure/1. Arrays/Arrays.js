const arr = [1, 2, 3, 4, "satyam"];

arr.push(4); // To add element at last
arr.unshift(5); // To add element at 0 index / first

arr.pop(); // To delete element at last
arr.shift(); // To delete element at first / 0 index

arr[1]; // To access any index value

for (const item of arr) {
  // To Iterate Each Element of an Array
  console.log(item);
}

// map, filter, reduce, concat, slice, splice
