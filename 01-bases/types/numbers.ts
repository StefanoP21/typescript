(() => {
  let avengers: number = 10;
  const villians: number = 5;

  if (avengers > villians) {
    console.log('We are safe');
  } else {
    console.log('Earth is doomed');
  }

  avengers = Number('5A');
  console.log({ avengers });
})();
