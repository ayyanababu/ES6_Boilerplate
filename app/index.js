let test = [10, 20, 30, 40];

let index = test.findIndex( num => num === 20 )
console.log(index)

test.splice(index, 1)
console.log(test)

let newArray = [
  ...test.slice(0, index),
  ...test.slice(index+1, test.length)
]

console.log(`new array ${newArray}`)

let points = [10, 20, 30];
console.log(points)

points = points.map(point => (point+1) )
console.log(points)

let name = "ayyanababu"

//console.log(name)

{
  let name = "raja"
  //console.log(name)
}

//console.log(name)


//constants
// constants just stop reassign to this variable
const arr = [1,2,3,4]
arr.push(5)
//console.log(arr)

/*const x = 5;
x = 6 * 5; //throws console.error();
*/
let numbers = [1,2,3]
let print = (a, b, c) => {
  //console.log(a, b, c)
}

print(...numbers)
//console.log(...numbers)
//
let str = 'hi my name is ayyanababu \n need to come in second line'
console.log(str)

let secondstr = `hi my name is ayyanababu
need to come in second line`
console.log(str)


let nums = [100,200,300]
let [ first, ...second ] = nums
console.log(first, second)
