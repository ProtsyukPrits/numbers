




// +++++++++++++++++++++++



// Сортування чисел по спаданню

// let numerics = [5, 7, 2, 9, 3, 1, 8];


// function matching(first, second) {

//      return second - first
// }

// numerics = numerics.sort(matching)
// document.writeln(numerics);



// ++++++++++++++++++++++




// Додає 3 букви заданого слова чи речення (Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt)

// let  word = "JavaScript";


// // функция обратного вызова
// function getChars(value, index, str) {
// // Возвращаем строку состоящую из предыдущего, текущего и следующего символа
//     return str.substring(index - 1, index + 2);
// }

// // Применяем метод map к строке
// var arr = Array.prototype.map.call(word, getChars);


// document.writeln(arr); 



// +++++++++++++++++++



// Вибираємо тільки перші букви кожного слова в масиві

// let str = "Каждый охотник желает знать, где сидит фазан.";

// /* функция обратного вызова возвращающая true,
// если текущий элемент массива является первым
//  символом или следует за пробелом */
// function firstChar(value, index, arr) {  
//     if (index == 0)  
//         return true;  
//     else  
//         return arr[index - 1] === " ";  
// }  

// // Создаём массив, состоящий из символов, следующих за пробелами  
// let array = [].filter.call(str, firstChar);  

// document.write(array); 




// ++++++++++++++++




//  Шукає числа схожі до 7 (0:7, 1:6, 2:5, 3:4)

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {

//   let result = []
//   let obj = {}

//   for (let i = 0; i < numbers.length; i++) {
//     let elem = numbers[i]

//     for (let j = i + 1; j < numbers.length; j++) {
//       let item = numbers[j]

//       if (elem + item != 7) continue
      
//       let num = elem + ':' + item
//       obj[num] = num
//     }
//   }

//   for (let key in obj) {
//     result.push(obj[key])
//   }
//   return result
// }

// document.writeln(sumSeven(numbers));




// ++++++++++++++++




// Робить суму кожного значення в масиві із зростанням ++,
// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17]

// let numbers = [2, 3, 5, 7, 11, 13, 17]

// function currentSums(numbers) {
//   let result = []
  
//   numbers.reduce( function(sum, current, i) {
//     return result[i] = sum + current 
//   }, 0)
// alert(result )
//  }

// currentSums(numbers); 



// ++++++++++++++++++



//  Повертає довжину слова який заданий в масиві

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map(function (piece) {
//   return piece.length
// })

// alert( vegetableLength );




// ++++++++++++++++




// Робимо перерахунок чисел в діапазоні якому ми задали.

// function generateNumbers(start, len) {
//   let arr = new Array(len)
  
//   for (let i = 0; i < len; i++, start++) {
//     arr[i] = start
//   }
// return arr
// }

// document.writeln(generateNumbers(0, 5));  
// document.writeln(generateNumbers(-5, 4));



// +++++++++




// Переносимо число з почиції 3 в позицію 1 (відлік з 0**)

// function moveElement(arr, from, to) {
//   arr.splice(to,0,arr.splice(from,1)[0]);
//   return arr;
// };

// var arr = [ 'a', 'b', 'c', 'd', 'e'];
// document.writeln(moveElement(arr, 3, 1)); 




// +++++++++++++++++++




// Вибираємо число та скільки цих чисел нам потрібно

// function arrayFilled(len, value) {
//   let num = []
  
//   for (len; len > 0; len--) {
//     num.push(value)
//   }
//   return num
// }
// document.writeln(arrayFilled(10, 1) + '<br>');   
// document.writeln(arrayFilled(4, 12));



// ++++++++++++++++++++




// Вибирає рандомне число з масиву

// function randomElement(arr) {

 
//    return  arr[Math.floor(Math.random()*arr.length)]
//   }

// let arr = [24, 45, 22, 35, 43];
// document.writeln(randomElement(arr));



// +++++++++++++++++++




// Видалення елементів з масиву

// function removeItem(arr, num) {
//   let store = []

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] != num) {
//       store.push(arr[i])
//     }
//   }
// return store

// }

// document.writeln(removeItem([3, 5, 7, 8, 5], 5));




// +++++++++++++++++++++++



// Повертає корінь слів в масиві

// let arr1 = ['Капуста', 'Капитал'];
// let arr2 = ['Репа', 'Редиска'];
// function startingSubstring(arr) {
//  let result = ''
//   const str1 = arr[0]
//   const str2 = arr[1]

//   for (let i = 0; i < str1.length; i++) {
//     while (str1[i] === str2[i]) {
//       result += str1[i]
//       break
//     }
//   }
//   return result
// }

// let res1 = startingSubstring(arr1);
// let res2 = startingSubstring(arr2);

// document.writeln(res1); 
// document.writeln(res2); 




// +++++++++++++++++++



//  Вивід на екран обєкта з 2-ма ключами

// let litmir = [
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
//    ];

// function propertyValue(array, key) {
  
//   const arr = []
//   let index = - 1
//   let item

//   while (++index < array.length) {
//     item = array[index]

//     if (item.hasOwnProperty(key)) {
//       arr[arr.length] = item[key]
//     }
//   }
// return arr 
// }

// document.writeln(propertyValue(litmir, 'title') + ':' + '<br>')
// document.writeln(propertyValue(litmir, 'author'))





// ++++++++++++++++++





// //  Шукає числа щоб на виході в сумі вони мали 5, тобто 1 + 4 та 2 + 3

// let num = 5;
// let arr = [1, 1, 1, 1, 1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

// function findCouple(array, number) { 
//   let result = []
//   let obj = {}

//   // удаляємо повторення з масива
//   for (i = 0; i < array.length; i++) {
//     let str = array[i]
//     obj[str] = true
//   }

//   array = Object.keys(obj)

//   // Шукаємо унікальне значення
//   let x = null,
//     y = null
  
//   // Шукаємо перше число
//   array.forEach(function (i, value)  {
//     if(number - value < number) {
//     x = number - value

//       // Шукаємо друге число
//       array.forEach(function (j, value2) {
//         if (x == value2 && j > i) {
//           y = value
          
//           result.push(' Ваша пара чисел: ' + y + ' + ' + x)
//       }
//     })
//     } 
//   })
//   return result
//   }

// document.writeln(findCouple(arr, num));



// ++++++++++++++++++++



// Вивід на екран обєкта-масива по алфавіту

// let litmir = [
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
// ];
   

// function compareTitle(a, b) {
//   if (a.title < b.title) 
//     return -1
//    if (a.title > b.title) 
//     return 1
//     return 0
// }

// function compareAuthor(e, d) {
//   if (e.author < d.author) 
//     return -1
//    if (e.author > e.author) 
//     return 1
//     return 0
// }
// litmir.sort(compareTitle)

 
// for (i = 0; i < litmir.length; i++) {
//   document.writeln('- ' + litmir[i].title + '<br>')
// }




// +++++++++++++++++++




// Відсіює наші false значення  Nan, false, undefined, null, 0, -0

// array = [NaN, 0, 77, false, -17, '', undefined, 99, null];
// function filterFalse(arr) {
//    return arr.filter(function(v) {return !!v})
//     }
// document.writeln(filterFalse(array)); // [ 77, -17, 99 ]



// ++++++++++++++++++++++



// Привязка 2ч елементів

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = arr.reduce(function (a, b)  { return a + b })
// let product = arr.reduce(function (a, b) {return a * b})
// document.writeln(" Сумма : "+sum + " Произведение : " + product)




// ++++++++++++++++++++++




// Перевірка на к-сть повтореннь елемента в масиві

// let arr1 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
// let controlObj = {}
// let count, max = 0
// let output = []

// for (let i = 0; i < arr1.length; i++) {
//   if (controlObj[arr1[i]] != true) {
//     for (let j = i; j < arr1.length; j++ ) {
//       if (arr1[i] == arr1[j]) {
//         count++
//       }
//     }

//     if (count > max) {
//       max = count
//       output = arr1[i] + ' repiet ' + count + ' time'
//     }
//     count = 0
//   }
//   controlObj[arr1[i]] = true
// }

// document.writeln(output);





// ++++++++++++++++++++++++++




// Порівняння двох обєктів щоб знайти різні значення 

// var arr1 = [1, 2, 'a'];
// var arr2 = [1, 2, 3, 4, 'b'];  

// function arrayDiff(arr1, arr2) {
//   let obj1 = {},
//     obj2 = {},
//     diff = [],
//     key
//   for (i = 0; i < arr1.length; i++) { obj1[arr1[i]] = true }
//   for (i = 0; i < arr2.length; i++) { obj2[arr2[i]] = true }
//   for (key in obj1) { if (!(key in obj2)) { diff.push(key) } }
//   for (key in obj2) { if (!(key in obj1)) { diff.push(key) } }
//   return diff
// }

// document.writeln(arrayDiff(arr1, arr2) + '<br>');
// document.writeln(arrayDiff(arr2, arr1));



// ++++++++++++++++++++++++


// Повертає к-сть повторюваних елементів

// function countIdentic(arr) {
//  let clone = arr.slice(0),
//     test = [],
//     cur,
//     count = 0


//   while (clone.length) {
//     cur = clone.shift()
//     if (test.indexOf(cur) === -1) {
//       test.push(cur)
//       if (clone.indexOf(cur) >= 0) {
//         count++
//       }
//     }
 
//   }
//   return document.writeln(count+'<br>')
// }

// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) 
// countIdentic([15,14,13,19,13,14,14,14,7,9,9])



// ++++++++++++++++++++++++++



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


