/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here

// let smoothieMachine = (...init) => {
//   let finalRequest = "I'm having a smoothie with milk "

//     for(let i = 0; i < init.length; i++){
//       let ini = init[i]
//       finalRequest = finalRequest + ' and ' + ini;
//     }


//   return function (...allIngredients){
//           for(let i = 0; i < allIngredients.length; i++){
//           let ingredient = allIngredients[i];
//           //let firstRequest = finalRequest + allIngredients[0]
//           finalRequest = finalRequest + ' and ' + ingredient
//           }
//           return finalRequest
//         }
// };
const smoothieMachine = (...originalIngredients) => {
  let additionalIngredients = [];
  const str = "I'm having a smoothie with "
  return (...newIngredients) => {
    additionalIngredients = [...additionalIngredients, ...newIngredients];
    const allingredients = [...originalIngredients, ...additionalIngredients];
    return str + allingredients.join(' and ');
  };
};


let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
