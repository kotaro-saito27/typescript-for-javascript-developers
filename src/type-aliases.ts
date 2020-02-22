export { };

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: "kotaro",
  age: 23
};

type Profile2 = typeof example2;

const example3: Profile2 = {
  name: "test",
  age: 22
}