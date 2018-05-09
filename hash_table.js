String.prototype.hashCode = function(max){
  var hash = 0;
  if (!this.length) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(max?hash%max:hash);
};
console.log("cdefab".hashCode())