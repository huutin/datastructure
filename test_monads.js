const _ = require('lodash');
const Maybe = require("lodash-fantasy/data/Maybe");
const isEven = (x) => x % 2 === 0;
const times = [
  Array.from(Array(8).keys()).map((x) => { return (x + (x > 1 ? ' Hours' : ' Hour')) }),
  Array.from(Array(6).keys()).map((x) => { return (x * 10 + (x > 1 ? ' Mins' : ' Min')) })
]
const getTimeText = (_times, x, y) => _times[x][y];
const getHourText = _.partial(getTimeText, times, 0);
const getMinText = _.partial(getTimeText, times, 1);
const arr = [1, 2].reduce((result, value) => {
  let fn = (!result.length) ? getHourText : getMinText;
  result += Maybe.ofNullable(value).map(fn).orElse('') + " ";
  return result
}, "")
console.log(arr)