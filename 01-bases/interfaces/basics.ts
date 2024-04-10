(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getPowers?: () => string;
  }

  let hero: Hero = {
    name: 'Superman',
    age: 30,
    powers: ['Super strength', 'Fly'],
    getPowers() {
      return this.powers.join(', ');
    },
  };

  // console.log(hero);
})();
