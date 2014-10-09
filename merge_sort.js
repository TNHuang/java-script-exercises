
Array.merge = function (ar1, ar2) {
  var new_aray = [];

  while (ar1.length > 0 && ar2.length > 0) {

    (ar1[0] < ar2[0]) ? new_aray.push(ar1.shift()) : new_aray.push(ar2.shift());
  }

  return new_aray.concat(ar1).concat(ar2);
};

Array.prototype.mergeSort = function() {
  if (this.length === 1){
    return this;
  }

  var mid = Math.floor((this.length + 1) / 2);
  return Array.merge(
    this.slice(0, mid).mergeSort(),
    this.slice(mid, this.length).mergeSort()
  );

};

