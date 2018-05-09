String.prototype.hashCode = function(max){
  let hash = 0;
  if (!this.length) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(max?hash%max:hash);
};

const HashTable = function(size = 100) {
  let table = {},
    insert = function(item) {
      let hashedIndex = item.id.hashCode(size)
      while (table[hashedIndex]) {
        hashedIndex = (hashedIndex + 1) % size;
      }
      table[hashedIndex] = item
    },
    search = function(id) {
      let hashedIndex = id.hashCode(size)
      while (table[hashedIndex] && table[hashedIndex].id !== id) {
        hashedIndex = (hashedIndex + 1) % size;
      }
      return table[hashedIndex].id === id ? table[hashedIndex] : null
    },
    printAll = function() {
      console.log(table)
    }
  return {
    insert: insert,
    search: search,
    printAll: printAll
  }
}
module.exports = HashTable
