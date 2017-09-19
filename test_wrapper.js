const _ = require('lodash');
const Maybe = require('monet');

class Wrapper {
  constructor(value) {
    this.value = value;
  }
  map(f) {
    return f(this.value);
  };
  toString() {
    return 'Wrapper (' + this.value + ')';
  }
}
const wrap = (val) => new Wrapper(val);
Wrapper.prototype.fmap = function (f) {
  return wrap(f(this.value));
};

const plus = _.curry((a, b) => a + b);
const plus3 = plus(3)
const plus10 = plus(10)

const two = wrap(2)
const five = two.fmap(plus3)
// console.log(two.map(_.identity))
// console.log(five.fmap(plus10).map(_.identity))
const test = wrap()
// console.log(wrap().map(_.identity))
var maybe = Maybe.Some(123);
console.log(maybe)
