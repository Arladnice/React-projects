interface D3Point {
  x: number;
  y: number;
}
interface iD3Point extends D3Point {
  z: number;
}

type stringOrNumber = string | number;

function test4(coord: stringOrNumber) {
  return "";
}
