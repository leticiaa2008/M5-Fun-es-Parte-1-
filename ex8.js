function isPrime(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count === 2;
}

console.log(isPrime(2));   
console.log(isPrime(5));  
console.log(isPrime(10)); 
console.log(isPrime(13)); 
console.log(isPrime(15)); 
