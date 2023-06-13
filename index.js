// receives a function and calls it
function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
// call back that are function 
function returnsANamedFunction() {
    return function namedFunction() {
      // Function body
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body of the anonymous function 
    };
  }
  
  