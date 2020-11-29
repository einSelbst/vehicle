function buildName1(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}


function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

const myAdd1: (baseValue: number, increment?: number) => number = function (
  x: number,
  y: number = 1
): number {
  return x + y;
};

const myAdd2 = function (
  x: number,
  y: number = 1
): number {
  return x + y;
};

const myAdd3 = (x: number, y: number = 1): number => x + y;

export default function About () {
  return <div>About us</div>
}
