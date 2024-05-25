const convertToCelsius = function(temp) {
  let ctemp = (temp - 32) * (5/9);
  ctemp = Math.round(ctemp * 10) / 10;
  return ctemp;
};

const convertToFahrenheit = function(temp) {
  let ftemp = (temp * 9/5) + 32;
  ftemp = Math.round(ftemp * 10) / 10;
  return ftemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};