
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