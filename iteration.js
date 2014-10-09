Array.prototype.bubbleSort = function (fcn) {
  var sorted = false;
  fcn = fcn || function(a,b) { return (a > b ? 1 : 0) };
  while (sorted === false){
    sorted = true;
    for(var i = 0; i <this.length-1 ; i++){
      if ( fcn(this[i], this[i+1]) === 1){
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;

        sorted = false;
      };
    };
  };
  return this;
};

String.prototype.substrings = function () {
  var new_arr = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i ; j < this.length; j++) {
      new_arr.push(this.substring(i,j+1));
    };
  };
  return new_arr;
};