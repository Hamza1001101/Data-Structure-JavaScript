/**
 * * LinkedList
 * * A linkedList is a collection of items where each item has 
 * * a connection to the next item in the list. 
 * * There are two types of linkedList singly and doubly 
 * * Linked list. 
 */

// create a node object
function createNode(value) {
    return {
        value,
        next: null
    }
}

// create our list of data structure
function createLinkedList() {
    return {
        head: null,
        tail: null,
        length=0,

        isEmpty() {
            return this.length === 0
        },
        push(value) {
            const node = createNode(value)
            //check if our head is empty
            if (this.head === null) {
                this.head = node
                this.tail = node
                this.length++
                return node
            }
            this.tail.next = node
            this.tail = node
            this.length++
        },
        pop() {
            //if our node is empty
            if (this.isEmpty()) return null

            //if our list has one node
            const node = this.tail
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length--
                return node
            }

            //All other situations
            let current = this.head
            let penultimate
            while (current) {

                if (current.next === this.tail) {
                    penultimate = current
                    break
                }
                current = current.next
            }
            penultimate.next = null
            this.tail = penultimate
            this.length--
            return node
        },
        get(index) {
            if (index < 0 || index > this.length) {
                return null
            }
            if (index === 0) return this.head

            let current = this.head
            let i = 0
            while (i < index) {
                i++
                current = current.next
            }
            return current
        },

        delete(index) {
            if (index < 0 || index > this.length) {
                return null
            }

            if (index === 0) {
                const deleted = this.head

                this.head = this.head.next
                this.length--

                return deleted
            }

            let current = this.head
            let previous
            let i = 0

            while (i < index) {
                i++
                previous = current
                current = current.next
            }

            const deleted = current
            previous.next = current.next
            this.length--

            return deleted
        }

    }
}

