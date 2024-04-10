(() => {
  type HeroType = {
    name: string;
    age: number;
    powers: string[];
  };

  let myCustomVariable: string | number | HeroType = 'Hello World';
  console.log(typeof myCustomVariable);

  myCustomVariable = 100;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Superman',
    age: 30,
    powers: ['Super strength', 'Fly'],
  };
  console.log(typeof myCustomVariable);
})();
