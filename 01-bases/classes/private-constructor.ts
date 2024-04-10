(() => {
  // Singleton
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {
      console.log('Apocalipsis constructor');
    }

    static getInstance(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Apocalipsis');
      }

      return Apocalipsis.instance;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  const apocalipsis1 = Apocalipsis.getInstance();
  const apocalipsis2 = Apocalipsis.getInstance();

  apocalipsis1.changeName('Nuevo Apocalipsis');

  console.log(apocalipsis1, apocalipsis2);
})();
