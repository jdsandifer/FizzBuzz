// Common approach using a loop and conditionals
// This one uses modulus 15 as a shortcut for
// checking for factors of 3 and 5 at the same time.

const fizzBuzz = (max) => {
  for (let i = 1; i <= max; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}
