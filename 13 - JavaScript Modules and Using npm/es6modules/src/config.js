export const apiKey = 'abc123';
// default export allows imports under anyname
export const url = 'http://waitbutwhy.com';
export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
