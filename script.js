function fibs(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

console.log(fibs(8));
