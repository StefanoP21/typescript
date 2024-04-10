(() => {
  let hero: {
    name: string;
    age: number;
    powers: string[];
    getPowers?: () => string;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super speed'],
  };

  hero = {
    name: 'Superman',
    age: 30,
    powers: ['Super strength', 'Fly'],
    getPowers() {
      return this.powers.join(', ');
    },
  };

  console.log(hero);
})();
