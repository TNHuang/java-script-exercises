var doubleArray = function (array){
  for(var i = 0; i < array.length; i++){
    array[i] = array[i] * 2;
  };
  return array;
};


Array.prototype.myEach = function( fcn){
  for(var i = 0; i <this.length; i++){
    fcn(this[i]);
  };
  return this;
};

Array.prototype.myMap = function (fcn){
  var new_array = [];
  var new_fcn = function(arg){
    new_array.push( fcn(arg) );
  };
  this.myEach(new_fcn);
  return new_array;
};

Array.prototype.myMap = function (fcn){
  var new_array = [];
  this.myEach(
    function(arg){
      new_array.push( fcn(arg) );
    }
  );
  return new_array;
};

Array.prototype.myInject = function(fcn, acc){

  acc = acc || this.shift();
  var new_fcn = function(arg){
    acc = fcn(acc, arg)
  };
  this.myEach(new_fcn);
  return acc;
};