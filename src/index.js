
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix === []) return [];
  
  let arr = matrix.map((x, i) => i % 2 !== 0 ? x.reverse(): x);

  return arr.flat(Infinity)
}
