(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {
      console.log('Mutant constructor');
    }
  }

  class Xmen extends Mutant {
    saveTheWorld() {
      console.log('Save the world');
    }
  }

  class Villain extends Mutant {
    destroyTheWorld() {
      console.log('Destroy the world');
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan');
  // const magneto = new Villain('Magneto', 'Erik Lehnsher');

  // console.log(magneto);

  const printName = (mutant: Mutant) => {
    console.log(mutant.realName);
  };

  // printName(magneto);
})();
