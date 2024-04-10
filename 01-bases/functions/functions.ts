const villain: string = 'Joker';

function whoIsVillain(): string {
  return villain;
}

const activeVillain: string = whoIsVillain();

console.log(typeof whoIsVillain);
console.log(activeVillain);
