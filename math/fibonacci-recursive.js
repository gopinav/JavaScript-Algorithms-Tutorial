function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(7)) // 8
