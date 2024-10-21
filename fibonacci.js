// Iteratively generate a fibonacci sequence up to the 'n' index

function fibs(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

// console.log(fibs(8));

// Recursively generate a fibonacci sequence up to the 'n' index

function fibsRec(n) {
  // Handle base cases
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  // Handle recursion case
  const array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(fibsRec(8));
//should return the array [0, 1, 1, 2, 3, 5, 8, 13].
