function mergeSort(set) {
  let left = [];
  let right = [];
  let result;

  if (set.length <= 1) {
    return set;
  }
  let mid = Math.floor(set.length / 2);

  for (let i = 0; i < mid; i++) {
    left.push(set[i]);
  }
  for (let j = mid; j < set.length; j++) {
    right.push(set[j]);
  }
  let leftValue = mergeSort(left);
  let rightValue = mergeSort(right);
  let leftValueNum;
  let rightValueNum;
  if (leftValue) {
    leftValueNum = parseInt(leftValue[0].innerText);
  }
  if (rightValue) {
    rightValueNum = parseInt(rightValue[0].innerText);
  }

  if (leftValueNum <= rightValueNum) {
    result = merge(leftValue, rightValue);
  } else {
    result = merge(rightValue, leftValue);
  }

  updateDiv(result);
  return result;
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (left.length > i && right.length > j) {
    if (parseInt(left[i].innerText) <= parseInt(right[j].innerText)) {
      result.push(left[i]);
      i++;
      updateDiv(result);
      // updateDiv(result);
      // sleep(500);
    } else {
      result.push(right[j]);
      j++;
      updateDiv(result);
      // updateDiv(result);
      // sleep(500);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

//   for (let s = 1; s < len; s += 2) {
//     for (let leftStart = 0; leftStart < len; leftStart += 2 * s) {
//       let left = leftStart;
//       let right = Math.min(left + s, len);

//       let leftLimit = right;
//       let rightLimit = Math.min(right + s, len);

//       let i = left;

//       while (left < leftLimit && right < rightLimit) {
//         if (result[left].style.height <= result[right].itemSize) {
//           await sleep(50);
//           buffer[i] = result[left];
//           left++;
//           i++;
//           currentSet = buffer;
//           updateBoard();
//         } else {
//           await sleep(50);
//           buffer[i] = result[right];
//           right++;
//           i++;
//         }
//       }
//     }
//   }

// async function mergeSort() {
//   let result = currentSet;

//   let len = result.length;

//   let buffer = [];

//   for (let s = 1; s < len; s *= 2) {
//     for (let leftStart = 0; leftStart < len; leftStart += 2 * s) {
//       let left = leftStart;

//       let right = Math.min(left + s, len);

//       let leftLimit = right;
//       let rightLimit = Math.min(right + s, len);

//       let i = left;

//       while (left < leftLimit && right < rightLimit) {
//         if (result[left].itemSize <= result[right].itemSize) {
//           await sleep(50);
//           buffer[i] = result[left];
//           left++;
//           i++;
//           currentSet = buffer;
//           updateBoard();
//         } else {
//           await sleep(50);
//           buffer[i] = result[right];
//           right++;
//           i++;
//           currentSet = buffer;
//           updateBoard();
//         }
//       }

//       while (left < leftLimit) {
//         await sleep(50);
//         buffer[i] = result[left];
//         left++;
//         i++;
//         currentSet = buffer;
//         updateBoard();
//       }

//       while (right < rightLimit) {
//         await sleep(50);
//         buffer[i] = result[right];
//         right++;
//         i++;
//         currentSet = buffer;
//         updateBoard();
//       }
//     }

//     let temp = result;
//     result = buffer;
//     buffer = temp;
//   }
// }

// let ops = 0;

// async function mergeSort() {
//   let itemArray = currentSet;
//   let array = [];
//   for (let i = 0; i < currentSet.length; i++) {
//     array.push(itemArray[i].itemSize);
//   }
//   // break array into individual arrays of single integers
//   let result = array.map((num) => [num]);

//   // keep merging until result contains a single array
//   while (result.length > 1) {
//     const oddNumbered = result.length % 2 !== 0;
//     let temp = [];

//     // iterate 2 subarrays at a time and merge into larger subarray
//     for (let i = 0; i < result.length; i += 2) {
//       let a = result[i];
//       let b = result[i + 1];

//       // pre-merge 3 subarrays into 2 if there are odd number of subarrays
//       if (oddNumbered && i === result.length - 3) {
//         b = merge(b, result[i + 2]);
//         i++;
//       }
//       // accumulate intermediate result
//       temp.push(merge(a, b));
//       currentSet = temp.flat();
//       await sleep(500);
//       updateBoard();
//     }
//     // current level merged, update result
//     result = temp;

//     // for (let i = 0; i < result.length; i++) {
//     //   result[i].color = "rgb(255, 0, 0)";
//     // }
//   }
//   //   currentSet = result[0];
//   //   updateBoard();

//   return result[0];
// }

// function merge(arrA, arrB) {
//   const merged = [];
//   let j = 0;
//   let k = 0;

//   while (merged.length !== arrA.length + arrB.length) {
//     ops++;
//     if (arrB[k] === undefined || arrA[j] <= arrB[k]) {
//       merged.push(arrA[j]);
//       j++;
//     } else if (arrA[j] === undefined || arrA[j] > arrB[k]) {
//       merged.push(arrB[k]);
//       k++;
//     }
//   }
//   return merged;
// }
