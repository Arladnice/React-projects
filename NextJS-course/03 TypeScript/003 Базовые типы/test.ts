let a: number = 4;
let b: string = "ba";
let c = true;
let d = ["one", "two", "tree"];
// const d = a + c; Нельзя складывать разные типы

// const mas: string[] = ['sd', 2, 'df'] Нельзя в массив строк передавать цифры и наоборот

// let e: any = 3; Any не рекоммендуется использовать в продакшене

function test(a: string): string | number {
  return "";
}

const test2 = (a: number): number => {
  return a * 2;
};

d = d.map((x) => x.toLocaleUpperCase());

function countCoord(coord: { x: number; y?: number }) {}

function test3(id: number | string) {
  if (typeof id === "number") {
    id.toLocaleString();
  } else if (typeof id === "string") {
    console.log(id.toLocaleUpperCase());
  }
}
