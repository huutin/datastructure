const fib = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2)
}
for (let index = 0; index < 10; index++) {
  console.log(fib(index))
}