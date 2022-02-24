function logTime<T>(num: T): T {
  return num;
}

function logTime2<T>(num: T): T {
  if (typeof num == "string") {
    num.toLocaleUpperCase();
  }
  return num;
}

interface MyInterface {
	transform: <T, F>(a: T) => F
}

interface TimeStamp {
	stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
	console.log(num.stamp)
	return num
}