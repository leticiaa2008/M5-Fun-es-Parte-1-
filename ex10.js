function getMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(getMax([10, 5, 25, 8, 15])); 
console.log(getMax([3, 7, 2, 9, 4]));   
