let HashTable = require("./hash_table.js")
let ht = new HashTable(10000)
let itemList = Array.from(Array(10000).keys()).map(function(x) {
  return {
    id: x.toString(),
    name: "name" + x
  }
})
itemList.forEach(function(item) {
  ht.insert(item)
})
console.time('someFunction');
let rs = ht.search("9889")
console.timeEnd('someFunction');
console.log(rs.name)