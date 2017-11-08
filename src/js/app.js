function addAll() {
  return [...arguments].reduce((acc, num) => acc + num, 0);
}

const result = addAll(1, 2, 3, 4);
console.log("result: ", result);
