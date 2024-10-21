function sort(array) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  // recursion case
  const midPoint = Math.floor(array.length / 2);
  const leftSide = array.slice(0, midPoint);
  const rightSide = array.slice(midPoint, array.length);
  console.log(`The leftside is ${leftSide} and the rightside is ${rightSide}`);

  return merge(sort(leftSide), sort(rightSide));
}

function merge(left, right) {
  console.log("---------------------------");
  console.log("MERGE STARTING!!");
  console.log(`I'm comparing left:${left} and right:${right}`);

  let lid = 0;
  let rid = 0;

  let i = [];
  let j = [];
  let k = [];

  for (let n = 0; n < left.length; n++) {
    if (left[n] < right[n]) {
      i.push(left[n]);
      i.push(right[n]); // The issues is here
    } else {
      i.push(right[n]);
      i.push(left[n]); // The issues and here
    }
  }

  // Explaining issue above. This compares two values the second to the list without
  // comparing it to the OTHER values

  console.log(`Reordered list i is: ${i}`);
  return i;
}

console.log(sort([3, 2, 1, 13, 8, 5, 0, 1]));
