function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by any number then it is not prime
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false
