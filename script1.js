

function isStr(str) {
    /**
     * * The instanceof is handling some edge cases. 
     */
    return typeof str === 'string' || str instanceof String
}

const arr = [3, 3, 5, 3,]
const st = 'somalian'
const boo = true

console.log(isStr(boo))

function unCap(str) {
    let capitalized = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        
        if (str[i - 1] === ' ') {
            capitalized += str[i].toUpperCase()
        }
        else capitalized+= str[i]
    }
    return capitalized
}

console.log(unCap('the quick brown fox'))

let somevar = new String('hello')

console.log(typeof somevar)