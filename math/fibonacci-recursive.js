function recursiveFibonacci(n) {
  if ([0, 1].includes(n)) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(7)) // 8
