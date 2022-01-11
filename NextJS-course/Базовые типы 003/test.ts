let a: number = 4;
let b: string = "hello world";
let c = true;

let d: string[] = ["den", "eva"];

function test(a: string): number | string {
  return "he";
}

const test2 = (a: number): number => {
  return a * 2;
};

d = d.map((x: string) => x.toLocaleLowerCase());

function countCoord(coord: { lat: number; long: number | undefined }) {}

function printIt(id: number | string) {
  if (typeof id === "number") {
    console.log(id.toString);
  } else if (typeof id === "string") {
    console.log(id.toUpperCase);
  }
}

// проверка на то что массив является массивом
function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
  }
}

// void когда функция ничего не возвращает
const test3 = (a: number): void => {
  return;
};

const x: undefined = undefined;
const z: null = null;
