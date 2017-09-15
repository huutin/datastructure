var _ = require('lodash');

const normalize = (str) => str.replace(/\-/g, '');
const validLength = (param, str) => str.length === param;
const checkLengthSsn =  _.partial(validLength, 9);
const cleanInput = (str) => {
  return _.curry(normalize)(_.trim(str))
}
const isValidSsn = (str) => {
  return checkLengthSsn(cleanInput(str))
}
console.log(cleanInput(' 444-44-4444 '))
console.log(isValidSsn(' 444-44-4444 '))
