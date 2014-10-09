var makeChange = function (change, coins) {
  console.log(change + " " + coins);
  var best_guess = null;

  if (change === 0) {
    return [];
  }
  else if (change < coins[coins.length - 1]) {
    return null;
  }

  for (var i = 0; i < coins.length; i++) {
    for (var j = i; j < coins.length; j++) {
      var temp = makeChange(change - coins[i], coins.slice(j, coins.length))
      if (temp) {
        var guess = [coins[i]].concat(temp);
        if (!best_guess || guess.length < best_guess.length) {
          best_guess = guess;
        }
      }
    }
  }
  return best_guess;
};

