(() => {
  type AvengerType = {
    name: string;
    weapon: string;
  };

  const ironman: AvengerType = {
    name: 'Tony Stark',
    weapon: 'Armor',
  };

  const thor: AvengerType = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const capAmerica: AvengerType = {
    name: 'Steve Rogers',
    weapon: 'Shield',
  };

  const avengers: AvengerType[] = [ironman, thor, capAmerica];

  for (const avenger of avengers) {
    // console.log(avenger);
  }
})();
