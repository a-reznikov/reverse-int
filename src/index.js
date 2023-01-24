module.exports = function reverse (n) {
  let revertedNumber = String(n).split("").reverse().slice(0, 3).join("");
  return revertedNumber;
}
