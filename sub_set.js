Array.prototype.subsets = function () {
  if(this.length === 0) { return [[]] };
  var last = this[this.length-1];

  var addLast = function(arr) {
    return arr.concat(last);
  }
  var new_this = this.slice(0, this.length-1);
  return new_this.subsets().concat(new_this.subsets().map(addLast));
};