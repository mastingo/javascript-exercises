const convertToCelsius = function(arg1) {
  celcius = (arg1 - 32) * 5/9
  return Math.round(celcius * 10)/10
};

const convertToFahrenheit = function(arg1) {
  farenheiht = (arg1 * 9/5) + 32
  return Math.round(farenheiht * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
