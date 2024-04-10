(() => {
  class Avenger {
    constructor(private name: string, public realName: string) {
      console.log('Avenger constructor');
    }

    protected getFullName(): string {
      return `${this.name} (${this.realName})`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log('Xmen constructor');
    }

    get fullName(): string {
      return this.getFullName();
    }

    set fullName(realName: string) {
      this.realName = realName;
    }

    public getFullNameXmen(): string {
      return `${super.getFullName()} - Xmen`;
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log(wolverine);
  // console.log(wolverine.getFullNameXmen());

  // const ironman = new Avenger('Ironman', 'Tony Stark');
  // console.log(ironman);

  // wolverine.fullName = 'James Howlett';
  // console.log(wolverine.fullName);
})();
