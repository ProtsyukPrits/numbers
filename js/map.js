//  Map

// const obj = {
//   name: 'Dima',
//   age: 26,
//   job: 'PartTime'
// }

// const entries = [
//   ['name', 'Dima'],
//   ['age', 26],
//   ['job', 'PartTime']
// ]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))


// const map = new Map(entries)
// map
//   .set('newfield', 42)
//   .set(obj, 'Value of object')
//   .set(NaN, 'NaN ??')

// console.log(map.get(NaN))
// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// ----------------------

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//     console.log(val)
//   }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, m) => {
//   console.log(key, val)
// })

// ----------------------

// const array = Array.from(entries)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// --------------------

// const users = [
//   { name: 'Elena' },
//   { name: 'Alex' },
//   {name: 'Irina'}
// ]

// const visits = new Map()

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//     return visits.get(user)
// }
  
// console.log(lastVisit(users[0]))




// +++++++++++++++++++++



// WeakMap

// WeakMap ключами можуть бути тільки обєкти

// const map = new WeakMap([
//   [obj, 'obj data']
// ])

// obj = null

// ------------
// кешировка обєктів

// const cache = new WeakMap()
// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user,Date.now())
//   }
//   return cache.get(user)
//   }

// let lena = { name: 'Elena' }
// let alex = { name: 'Alex' }

// cacheUser(lena)
// cacheUser(alex)



// console.log(cache.has(lena))
// console.log(cache.has(alex))




// +++++++++++++++++++++++++++++



// WeakSet - означає що працює з обмеженнями тобто слабонький

// const users = [
//   { name: 'Elena' },
//   { name: 'Alex' },
//   {name: 'Irina'}
// ]

// const visits = new WeakSet()

// visits.add(users[0]).add(users[1])


// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))

