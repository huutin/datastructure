String.prototype.hashCode = function(max = 100){
  let hash = 0;
  if (!this.length) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(max?hash%max:hash);
};

const HashTable = function() {
  let table = {},
    insert = function(item) {
      let hashedIndex = item.id.hashCode()
      table[hashedIndex] = item
    },
    search = function(id) {
      let hashedIndex = id.hashCode()
      return table[hashedIndex]
    }
  return {
    insert: insert,
    search: search
  }
}
module.exports = HashTable
