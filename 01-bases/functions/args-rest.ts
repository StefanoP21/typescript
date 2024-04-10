(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const superHero: string = fullName('Bruce', 'Wayne', 'is', 'Batman');

  console.log({ superHero });
})();
