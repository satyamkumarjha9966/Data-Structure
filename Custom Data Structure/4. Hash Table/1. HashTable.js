class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    // This is a simple hash function that why there is a problem that is because of collision of same index value of name, mane, that overwrite the value.
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "satyam");
table.set("age", 22);
table.set("gender", "male");
table.set("location", "varanasi");
table.display();

console.log(table.get("name"));

table.remove("name");
// table.set("mane", "xyz");
// there is a problem that is because of collision of same index value of name, mane, that overwrite the value.
table.display();
