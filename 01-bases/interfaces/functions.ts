(() => {
  interface IFunction {
    (x: number, y: number): number;
  }

  const add: IFunction = (x, y) => x + y;
  const subtract: IFunction = (x, y) => x - y;
  const multiply: IFunction = (x, y) => x * y;
  const divide: IFunction = (x, y) => x / y;

  console.log(add(1, 2));
  console.log(subtract(1, 2));
  console.log(multiply(1, 2));
  console.log(divide(1, 2));
})();
