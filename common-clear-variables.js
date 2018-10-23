// Common approach using loop and conditionals
// Using some extra variables clarifies what
// is being checked in the conditionals.

const fizzBuzz = (max) => { 
  for (let i = 1; i <= max; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0

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
