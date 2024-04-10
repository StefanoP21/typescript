(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    single: boolean = false
  ): string => {
    return `${firstName} ${lastName || ''} - ${single ? 'S' : 'M'}`;
  };

  const name: string = fullName('Bruce');

  console.log({ name });
})();
