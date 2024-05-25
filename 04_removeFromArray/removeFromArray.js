const removeFromArray = function(array, ...arrayElements) {
  const newArray = [];
  array.forEach(function(element) {
    if (!arrayElements.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;