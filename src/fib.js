const fib = (number) => {
    return number <= 1 ? number : fib(number - 1) + fib(number - 2);
  };
  
export default fib;