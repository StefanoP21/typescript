(() => {
  const fullName = (firstName: string, lastName = ''): string => {
    return `${firstName} ${lastName}`;
  };

  const name: string = fullName('Bruce', 'Wayne');

  console.log({ name });
})();
