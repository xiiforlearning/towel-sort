
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []

  let result = [];
  let counter = 0
  
  matrix.forEach(arr => {
    counter += 1;
    if (counter % 2 !== 0) {
      result = result.concat(...arr)
    } else {
      result = result.concat(...arr.reverse())
    }
  });
  return result;
}
