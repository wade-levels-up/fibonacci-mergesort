function sort(array) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  // recursion case
  const midPoint = Math.floor(array.length / 2);
  const leftSide = array.slice(0, midPoint);
  const rightSide = array.slice(midPoint, array.length);

  return merge(sort(leftSide), sort(rightSide));
}

function merge(left, right) {
  let lcopy = left.slice();
  let rcopy = right.slice();
  let k = [];
  let lid = 0;
  let rid = 0;

  while (lid < lcopy.length && rid < rcopy.length) {
    if (lcopy[lid] < rcopy[rid]) {
      k.push(lcopy[lid]);
      lid += 1;
    } else {
      k.push(rcopy[rid]);
      rid += 1;
    }
  }

  k = k.concat(lcopy.slice(lid)).concat(rcopy.slice(rid));
  return k;
}

console.log(sort([3, 2, 1, 13, 8, 5, 0, 1]));
