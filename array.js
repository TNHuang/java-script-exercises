Array.prototype.uniq = function() {
  var new_array = [];
  for(var i = 0; i< this.length; i++){
    if( new_array.indexOf(this[i]) === -1 ){
      new_array.push(this[i]);
    };
  };
  return new_array;
};

Array.prototype.two_sum = function() {
  var new_array = [];
  for(var i = 0; i < this.length-1; i++){
    for(var j = i+1; j < this.length; j++){
      if ( (this[i]+this[j]) === 0){
        new_array.push([i, j])
      };
    };
  };

  return new_array;
};

Array.prototype.myTranspose = function() {
  var new_array = [];
  for(var i = 0; i < this.length; i++){
    var tmp = [];
    for(var j = 0; j < this.length; j++){
      tmp.push(this[j][i]);
    };
    new_array.push(tmp);
  };
  return new_array;
};