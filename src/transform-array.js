module.exports = function transform(arr) {
  if(arr.length === 0) return [];
  if(Array.isArray(arr) != true) throw new Error();
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === '--discard-next') {
    arr.splice(arr[i - 1], 2);
  } else if(arr[i] === '--discard-prev') {
    arr.splice(arr[i -2], 2);
} else if(arr[i] ===  '--double-next') {
arr[i] = arr[i + 1];
} else if(arr[i] === '--double-prev') {
  arr[i] = arr[i - 1];
}
}
  return arr;
  
};
