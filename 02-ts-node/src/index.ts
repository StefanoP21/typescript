import { Pokemon } from './decoretor/pokemon';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).Othername = 'Bulbasaur';

// console.log(charmander);

charmander.savePokemonToDB(1);
