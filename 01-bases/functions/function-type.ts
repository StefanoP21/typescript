(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = (): string => 'The world is saved!';

  // let myFunction: Function;
  let myFunction: (a: number, b: number) => number;

  myFunction = addNumbers;
  console.log(myFunction(10, 20));

  let myFunction2: (a: string) => string;

  myFunction2 = greet;
  console.log(myFunction2('John'));

  let myFunction3: () => string;

  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
