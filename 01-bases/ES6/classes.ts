(() => {
  class Avenger {
    name: string;
    power: number;

    constructor(name: string, power: number) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    canFly: boolean;

    constructor(name: string, power: number) {
      super(name, power);
      this.canFly = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  console.log(hulk);

  const falcon = new FlyingAvenger('Falcon', 100);
  console.log(falcon);
})();
