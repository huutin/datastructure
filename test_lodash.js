var _ = require('lodash');
const normalize = (str) => str.replace(/\-/g, '');
const validLength = (param, str) => str.length === param;
const checkLengthSsn = _.partial(validLength, 9);
const cleanInput = _.flow(_.trim, normalize)
const isValidSsn = _.flow(cleanInput, checkLengthSsn)
const myStr = ' 444-44-4444 '
console.log(cleanInput(myStr))
console.log(isValidSsn(myStr))
console.log(myStr)