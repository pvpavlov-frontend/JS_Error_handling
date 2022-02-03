"use strict"


function pow(x, n) {
  if ( typeof x !== "number" || typeof n !== "number") {
    throw new TypeError("Аргумент должен быть типа number")
  }
  if ( !Number.isInteger(x) || n < 0) {
    throw new RangeError("Аргумент должен быть целыим числом")
  }
  if ( n === 1 ) {
    return x;
  }
    return x * pow(x, n - 1);
}

try {
  console.log( pow(2, -10) );
} catch (e) {
  console.log('e :>> ', e);
}