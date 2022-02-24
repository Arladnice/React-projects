let test6: "test" = "test";

type orName = "up" | "down";

function test7(name: orName): -1 | 1 {
  switch (name) {
    case "up":
      return -1;
    case "down":
      return 1;
  }
}
