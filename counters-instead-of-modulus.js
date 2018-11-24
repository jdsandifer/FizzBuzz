// This approach uses simple counters to keep track
// of whether the number is divisible by 3 or 5. 
// This idea came to me after thinking about how much 
// processing power it takes to do a modulus operation 
// compared to other operations. In researching that,
// I learned more about basic processor operations 
// like ADD, MUL, DIV, and MOD.

const fizzBuzz = (max) => {
  let threeCounter = 0
  let fiveCounter = 0
  for (let i = 1; i <= max; i++) {
    threeCounter++
    if (threeCounter === 4) {
      threeCounter = 1
    }
    fiveCounter++
    if (fiveCounter === 6) {
      fiveCounter = 1
    }
    const isDivisibleByThree = threeCounter === 3
    const isDivisibleByFive = fiveCounter === 5

    if (isDivisibleByThree && isDivisibleByFive) {
      console.log("fizzbuzz")
    } else if (isDivisibleByThree) {
      console.log("fizz")
    } else if (isDivisibleByFive) {
      console.log("buzz")
    } else {
      console.log(i)
    }

  }
}
