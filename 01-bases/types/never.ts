const error = (msg: string): never | number => {
  if (false) {
    throw new Error(msg);
  }

  return 1;
};

console.log('Before error function call...');
error('Something went wrong!');
console.log('After error function call...'); // This line will not be executed
