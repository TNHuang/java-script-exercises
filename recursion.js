var range = function(start, end){
  if (start === end){return [end]};
  return [start].concat( range(start+1, end) );
};

var sum = function (arr) {
  if (arr.length == 1){
    return arr[0];
  };

  return arr[0]+sum( arr.slice(1, arr.length) );
};

var expo1 = function (b, n) {
  if (n === 0 ){return 1};
  return b*expo1(b, n-1);
};

var expo2 = function(b, n){
  if (n === 0){return 1};


  if (n%2 === 0){
    return expo2(b, n/2)*expo2(b, n/2);
  }
  else{
    return b * expo2(b, (n - 1) / 2)*expo2(b, (n - 1) / 2);
  };
};

var fib = function (n) {
  if (n < 2) {return [0,1].slice(0,n);};
  var temp_fib =  fib(n-1);
  return temp_fib.push( temp_fib[n - 2] + temp_fib[n - 3]);
};


var bsearch = function(array, target){
  var mid = Math.floor( ( array.length+1)/2)
  if (array.length === 0){return null};

  if (target >= array[mid]){
    var temp = bsearch(array.slice(mid, array.length), target);

      if(temp === null){
        return null;
      }else{
        return (mid + temp);
      };

  }else if (target < array[mid]){
    var temp = bsearch(array.slice(0, mid), target);
      if(temp === null){
        return null;
      }else{
        return temp;
      };

  }else if (array[mid] == target){
    return 0
  };
};