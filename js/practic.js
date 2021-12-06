function countIdentic(arr) {
 let clone = arr.slice(0),
    test = [],
    cur,
    count = 0


  while (clone.length) {
    cur = clone.shift()
    if (test.indexOf(cur) === -1) {
      test.push(cur)
      if (clone.indexOf(cur) >= 0) {
        count++
      }
    }
 
  }
  return document.writeln(count+'<br>')
}

countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) 
countIdentic([15,14,13,19,13,14,14,14,7,9,9])
// Додавання спільну суму індексів і без суми



// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let arr3 = []

// if (arr1.length > arr2.length) {
//     count = arr1.length
// } else {
//    count = arr2.length
// }
 
// for (let i = 0; i < count; i++) {
//   if (arr2[i] === undefined) {
//     arr2.push(0)
//   } else {
//     if (arr1[i] === undefined) {
//       arr1.push(0)
//     }
//   }
//   arr3.push(arr1[i] + arr2[i])
// }

// document.writeln(arr3);


