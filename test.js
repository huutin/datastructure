let HashTable = require("./hash_table.js")
let ht = new HashTable(500000)
let itemList = Array.from(Array(500000).keys()).map(function(x) {
  return {
    id: x.toString(),
    name: "name" + x
  }
})
itemList.forEach(function(item) {
  ht.insert(item)
})
console.time('someFunction');
let rs = ht.search("99")
// itemList.filter(function(item) {
//   return item.id === "99"
// })
console.timeEnd('someFunction');
console.log(rs.name)