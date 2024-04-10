export const printObject = (arg: any) => {
  console.log(arg);
};
export const printFunction = (arg: any) => {
  return arg;
};

export function genericFuntion<T>(arg: T): T {
  return arg;
}

export const genericFunctionArrow = <T>(arg: T): T => {
  return arg;
};
