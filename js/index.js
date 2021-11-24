

// // Arrays
// const people = [
//   { name: 'Dima', age: 26, budget: 4000 },
//   { name: 'Elena', age: 17, budget: 3400 },
//   { name: 'Igor', age: 49, budget: 50000 },
//   { name: 'Mickle', age: 15, budget: 1800 },
//   { name: 'Vasilysa', age: 24, budget: 25000 },
//   { name: 'Victoria', age: 38, budget: 2300 },

// ]

// можна виводити двома методами for or for of

// ------------forEach
// people.forEach (person => console.log(person))

// ------------map
// const newPeople = people.map (person =>  `${person.name} (${person.age})`)

//  console.log(newPeople)

//-------------filter
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// ---------------reduce
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

//---------------find
// const igor = people.find(person => person.name === 'Igor')
// console.log(igor)

// ------------findIndex
// const igorIndex = people.findIndex(person => person.name === 'Igor')
// console.log(igorIndex)

// --------------- цепочка методів

// const amount = people
//   .filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: Math.sqrt(person.budget)
//     }
//   })
//   .reduce((total, person) => total + person.budget, 0)

// console.log(amount)






// ++++++++++++++++++++++++

// Iterator

// function* strGenerator() { // обовязково після функції зірочку, вона викликає йелд
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'

// }

// const str = strGenerator()



// ----------------------

// function* numberGenerator(n = 10) {
//   for (i = 0; i < n; i++) {
//     yield i
//   }
// }

// const num = numberGenerator(8)

// ----------------------------

// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return {value: undefined, done: true}
//       }
//     }
//   }
// }

// for (let k of iterator) {
//   console.log(k)
// }

// ------------------------


// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }

// for (let k of iter(6)) {
//   console.log(k)
// }


// ++++++++++++++++++++++++++


// // Proxy
// // --------------wrapp proxy 
// const withDefaulValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
//   })
// }

// const position = withDefaulValue({
//   x: 24,
//   y:42
// }, 0
// )

// // ------------hidden properties
// const withHiddenProps = (target, prefix = '_') => {
//   return new Proxy(target, {
//     has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj)
//       .filter(p => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
//   })
// }


// const data = withHiddenProps({
//   name: 'Dima',
//   age: 26,
//   _uid: '123123'  // приватне поле
// })



// // -----------optimization
// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach(item =>(index[item.id] = item)) 
//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':   //  push - дозволяє вносити нові дані в масив
//             return item => {
//               index[item.id] = item
//               arr[prop].call(arr, item) // Якщо одиничний виклик тоді call, якщо виклик з n-к-стю тоді apply
//             }
//           case 'findById': // findById - дозволяє швидко знаходити id в консолі 
//             return id => index[id]
//           default:
//             return arr[prop]
//         }
//         }
//       })
    
//   }
// })


// const users = new IndexedArray ([
//   { id: 11, name: 'Dima', job: 'Fullstack', age: 25 },
//   { id: 22, name: 'Elena', job: 'Student', age: 19 },
//   { id: 33, name: 'Victor', job: 'Backend', age: 21 },
//   { id: 44, name: 'Vasilisa', job: 'Teacher', age: 30}
// ])




// // const index = {}
// // userData.forEach(i => (index[i.id] = i)) // индексація по списку обєктів, надаємо кожному обєкту свій id




// // -------------proxy object

// const person  = {
//   name: 'Dima',
//   age: 25,
//   job: 'Fullstack'
// }

// const op = new Proxy(person, {
//   get(target, prop) {  // лавушки для обєкт даних, аналогічний меток як і обєкт, тільки з лавушками
//     // console.log('Getting pror $[prop]')
//     if (!(prop in target)) { // дозволяє компонувати наші три параметри в рядок за допомогою нижнього підкреслення
//       return prop
//         .split('_')
//         .map(p => target[p])
//         .join(' ')
//         }
//     return target[prop]
//   },
//   set(target, prop, value) {  // досволяє викинути помилку при неправильному введені ключа (name, age, job)
//     if (prop in target) {
//       target [prop] = value
//     } else {
//       throw new Error('No ${prop} field in target')
//     }
//   },
//   has(target, prop) {
//     return ['age', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {  
//     console.log('Deleting... ', prop)
//     delete target[prop]
//     return true
//   }
// })

// // ------------proxy funstion
// const log = text => `Log: ${text}` // принципово вказати зворотні кавички ``, щоб працбвав text

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Calling  fn... ')
    
//     return target.apply(thisArg, args).toUpperCase()
//   }
// })

// //---------------proxy classes

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }


// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {  // this is trap)
//     console.log('Construct... ')

//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Getting prop "${prop}"`)
//         return t[prop]
//       }
//     })
//   }
// })


// const p = new PersonProxy('Maxim', 30)







// +++++++++++++++++++++

// Async and await


// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(), ms))
  
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'



// function fetchTodos() {
//   console.log('Fetch todo started...')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//   .then(data => {
//   console.log('Data: ', data)
//   })
// .catch(e => console.error(e))


// await переносимо в блок try, і дописуємо блок з помилкою catch

//  В батьківського блока завжди повинні прописувати  async

// async function fetchAsyncTodos() {
//   console.log('Fetch todo started...')
//   try {
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data: ', data)
//   } catch (e) {
//     console.error(e)
//   }
// }

// fetchAsyncTodos()


// +++++++++++++++++++++++
//  Classes 

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)

//   }

//   hide() {
//     this.$el.style.display = 'none'
//   }

//   show() {
// this.$el.style.display = 'block'

//   }
// }


// class Box extends Component {
//   constructor(options) {
//     super(options.selector) 
    

//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.background = options.color
//   }
// }


// const box1 = new Box({
//   selector: '#box1',
//   size: 100,
//   color: 'red'
// })


// const box2 = new Box({
//   selector: '#box2',
//   size: 120,
//   color: 'blue'
// })



// class Circle extends Box {
//   constructor(options) {
//     super(options)

//     this.$el.style.borderRadius = '50%'
//   }
// }



// const c = new Circle({
//   selector: '#circle',
//   size: 90,
//   color: 'green'
// })














// class Animal{

// static type = 'ANIMAL'


//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail

//   }


//   voice() {
//     console.log('I am Animal')
//   }
// }


// // const animal = new Animal({
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true
// // })


// class Cat extends Animal {
//   static type = 'CAT'


//   constructor(options) {
//     super(options)
//     this.colot = options.color
//   }

//   voice() {
//     super.voice()
//     console.log('I am Cat')
//   }

//   get ageInfo() {
//     return this.age * 7
//   }

//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }

//   const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTali: true,
//     color: 'black'
//   })












//  +++++++++++++++++++++++

// objects



// const person =  Object.create(
//   {
//     calculateAge() {
//           console.log('Age:', new Date().getFullYear() - this.birthYear);

//     }
//   },



//   {
//     name: {
//       value: 'Dmytro',
//       enumerable: true,
//       writable: true,
//       configurable: true
//     },
//     birthYear: {
//     value: 1995,
//     enumerable: false,
//     writable: true,
//     configurable: false
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(value) {
//         document.body.style.background = 'red'
//         console.log('Set age', value)
//       }
//     }
//   }
// )
  

// for (let key in person) {
//   if (person.hasOwnProperty(key))  {
//  console.log('Key:', key, person[key])
//   }
// }


//  ++++++++++++++++++++++++




// Promises

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000)
// })


// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
 
// })
  
//   .then(clientData => {
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then(data => {
//     console.log('Midified', data)
//   })
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finally'))



// const sleep = ms => {
//   return new Promise(resolve => {
//   setTimeout(() => resolve(), ms)
  
//   })
// }

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(5000).then(() => console.log('After 5 sec'))


// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//   console.log('All Promises')
// })

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//   console.log('Race Promises')
// })