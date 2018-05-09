let HashTable = require("./hash_table.js")
let ht = new HashTable()
let item = {
  id: 'abcdef',
  name: 'name1'
}

ht.insert(item)
let rs = ht.search("abcdef")
console.log(rs.name)