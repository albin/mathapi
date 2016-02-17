function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

Math.log(4)



Math.hypot = Math.hypot || function() {
  var y = 0;
  var length = arguments.length;

  for (var i = 0; i < length; i++) {
    if (arguments[i] === Infinity || arguments[i] === -Infinity) {
      return Infinity;
    }
    y += arguments[i] * arguments[i];
  }
  return Math.sqrt(y);
};



Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}


var x = Math.min(f(foo), boundary);


Math.log2 = Math.log2 || function(x) {
  return Math.log(x) / Math.LN2;
};
