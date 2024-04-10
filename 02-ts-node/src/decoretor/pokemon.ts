// Class decorator
function printToConsole(constructorFn: Function) {
  console.log(constructorFn);
}

// Decorator factory
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) return printToConsole;
  else return () => console.log('Not printing to console');
};

// Method decorator
const blockPrototype = (constructorFn: Function) => {
  Object.seal(constructorFn);
  Object.seal(constructorFn.prototype);
};

function checkValidId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 151) {
        return console.log('Invalid ID');
      } else {
        return originalMethod(id);
      }
    };
  };
}

// Property decorator
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, 'getter');
        return 'readonly';
      },

      set(this, value) {
        // console.log(this, value, 'setter');
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
  @readonly(true)
  public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public name: string) {}

  @checkValidId()
  savePokemonToDB(id: number) {
    console.log(`Saving to DB with id ${id}`);
  }
}
