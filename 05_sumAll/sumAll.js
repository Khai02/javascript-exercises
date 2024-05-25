// const sumAll = function(intOne, intTwo) {                         //// works up to test 5 with the formula of S(n) = n (n + 1) ∕ 2
//   if (intOne < 0 || intTwo < 0) {
//     return "ERROR";
//   } else if (intOne < intTwo) {
//     return intTwo * ((intTwo + 1) / 2)
//   } else if (intOne > intTwo) {
//     return intOne * ((intOne + 1) / 2)
//   } else if (intOne < 0 || intTwo < 0) {
//     return "ERROR";
//   };
// };

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;