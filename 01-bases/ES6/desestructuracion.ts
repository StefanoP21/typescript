(() => {
  type AvengerType = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };

  const avengers: AvengerType = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    active: true,
    power: 1500.12131,
  };

  const printAvenger = ({ ironman, ...rest }: AvengerType): void => {
    console.log(ironman, rest);
  };

  // printAvenger(avengers);

  const avengersArray: [string, boolean, number] = ['Thor', true, 1500];

  const [thor, bool, num] = avengersArray;

  // console.log({ thor, bool, num });
})();
