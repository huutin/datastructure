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
const db = [{
    name: 'Name1',
    id: 1,
    address: 'Address1'
  },
  {
    name: 'Name2',
    id: 2,
    address: 'Address2'
  },
  {
    name: 'Name3',
    id: 3,
    address: 'Address3'
  },
  {
    name: 'Name4',
    id: 4,
    address: 'Address4'
  }
]
const find = (db, id) => {
  return db.filter((item) => {
    return item.id === id
  })[0]
}
const getPropObj = (b, a) => a[b]
const getProp = (b) => _.partial(getPropObj, b)
const safeFindObject = _.curry((_db, id) => Maybe.ofNullable(find(_db, id)));
const safeFindStudent = safeFindObject(db);
console.log(safeFindStudent(1).map(getProp('address')).orElse('Not Found'))
