const _ = require('lodash');
const Maybe = require("lodash-fantasy/data/Maybe");
const normalize = (str) => str.replace(/\-/g, '');
const validLength = (param, str) => str.length === param;
const checkLengthSsn = _.partial(validLength, 9);
const cleanInput = (str) => {
  return _.curry(normalize)(_.trim(str))
}
const isValidSsn = (str) => {
  return checkLengthSsn(cleanInput(str))
}
const db = Array.from(Array(1000).keys()).reduce((result, value) => {
  result.push({
    id: value,
    name: "Name" + value
  })
  return result;
}, [])
const find = (db, id) => {
  return db.filter((item) => {
    return item.id === id
  })[0]
}
const getPropObj = (b, a) => a[b]
const getProp = (b) => _.partial(getPropObj, b)
const safeFindObject = _.curry((_db, id) => Maybe.ofNullable(find(_db, id)));
const safeFindStudent = safeFindObject(db);
console.time('someFunction');
console.log(safeFindStudent(88).map(getProp('name')).orElse('Not Found'))
console.timeEnd('someFunction');