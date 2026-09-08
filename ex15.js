let analysisType = "sum";

function analyzeNumbers(analysisType, numbers) {

  function sumNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  function averageNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  if (analysisType === "sum") {
    return sumNumbers(numbers);
  }

  if (analysisType === "average") {
    return averageNumbers(numbers);
  }
}

console.log("Global:", analysisType);

console.log(
  "Soma:",
  analyzeNumbers("sum", [1, 2, 3, 4])
);

console.log(
  "Média:",
  analyzeNumbers("average", [1, 2, 3, 4])
);
