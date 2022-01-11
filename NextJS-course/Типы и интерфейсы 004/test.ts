// мы можем объявлять тип функции вот так Types:
type Point = { x: number; y: number };
interface iPoint {
  x: number;
  y: number;
}

type stringOrNumber = string | number;

function print(coord: iPoint) {}

// вместо вот этого
function print2(coord: { x: number; y: number }): void {}

// В TypeScript рекомендуется использовать именно Интерфейсы

