console.log('helo')   

/**
 * * Sets
 * * Sets can have mixed data types
 * * No key-values, sets are also iterable like arrays
 */

const ordersSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pizza'])
console.log(ordersSet)

console.log(ordersSet.size)
//check if something is in there
console.log(ordersSet.has('pizza'))

ordersSet.add('Hamza')
console.log(ordersSet)
ordersSet.delete('Pasta')
console.log(ordersSet.entries())

for (const iterator of ordersSet) {
    console.log(iterator) 
}

const stuff = [ 'Waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']

const uniqueStuff = [...new Set(stuff)]  // = new Set(stuff)

/**
 * * Sets can use with Strings since they are both iterable.
 */

 console.log(new Set('hamzaahydfarah').size)

 /**
  * * MAPS.  (more useful than sets)
  * * Is a datastructure with key-value pairs. 
  * * Keys in the map can be every datatype not like objects
  * * which only can have a string keys. 
  */

const rest = new Map

/**
 * * The set-method returns the updated method. 
 */
rest.set('name', 'Classico Italiano')
rest.set(1, 'Florenza')
console.log(rest)

rest.set(4, 'Somaliland').set('open', 32)
console.log(rest.get('name'))

console.log(typeof rest)

console.log(rest.has('categories'))
rest.delete(4)

console.log(rest)

const map = new Map([
  [false, "no"],
  [true, "yes"],
]);



for (let [keys, values] of map.entries()) {
    console.log(keys, values)
}

map.forEach((value, key) => {
    console.log(key, value)
})

const originalMap = new Map().set(1, "a").set(2, "b").set(3, "c");
console.log(originalMap)

const newMap = new Map(
    [...originalMap].map(([k, v]) => [k*2,  '_'+ v])
)

console.log(newMap)



const filteredMap = new Map( // step 3
  [...newMap] // step 1
    .filter(([k, v]) => k > 3) // step 2
);
console.log('======>', filteredMap) 


/**
 * * LinkedList 
 */
const basket = ['apples', 'grapes', 'pears']

// 10--> 5--> 16 

/*let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next : null
      }
    }
  }
}*/
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  /** Add value */
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = {
      value: value, 
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this

  }
  insert(index, value) {
    
  }
}
 
const myLinkedList = new LinkedList(10)
myLinkedList.append(4)
console.log(myLinkedList)