import {
  genericFunctionArrow,
  genericFuntion,
  printFunction,
  printObject,
} from '../generic/generic';
import { IHero, IVillian } from '../interface';

// printObject('Stefano');
// printObject(42);
// printObject({ name: 'Stefano', age: 42 });

// console.log(printFunction(14.2354).toFixed(2));
// console.log(printFunction('Stefano').toUpperCase());
// // console.log(printFunction('Stefano').toFixed(2));

// console.log(genericFuntion('Stefano').toUpperCase());
// console.log(genericFunctionArrow(42.2325).toFixed(2));

const deapool = {
  name: 'Deadpool',
  realName: 'Wade Wilson',
  dangerLevel: 100,
};

console.log(genericFunctionArrow<IVillian>(deapool).dangerLevel);
