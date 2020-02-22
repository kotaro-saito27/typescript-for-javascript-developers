export { };

function error(message: string): never {
  throw new Error(message);
}

try {
  error('test');
} catch (err) {
  console.log({ err });
}

let foo: void = undefined;
// neverには値という概念がない
// let bar: never = undefined;
let bar: never = error('only me');