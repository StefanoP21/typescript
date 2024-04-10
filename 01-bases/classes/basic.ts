(() => {
  class Avenger {
    static readonly key: string = 'revenge';
    static getName() {
      return `We are ${this.key}, ${this.name}`;
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.realName}) is ${this.team}`;
    }
  }

  const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
  // console.log(antman.bio());
  // console.log(Avenger.getName());
})();
