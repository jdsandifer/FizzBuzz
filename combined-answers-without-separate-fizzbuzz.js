// For this I'm using a loop and conditionals
// except no output is generated until the end.
// This time "fizzbuzz" is not generated separately
// but is a combination of "fizz" and "buzz".

const fizzBuzz = (max) => {
  let output = ""
  const lineTerminator = "\n"
  
  for (let i = 1; i <= max; i++) {
    const divisibleByThree = i % 3 === 0
    const divisibleByFive = i % 5 === 0

    if (divisibleByThree) {
      output += "fizz"
    }
    if (divisibleByFive) {
      output += "buzz"
    }
    if (!divisibleByThree && !divisibleByFive) {
      output += i
    }
    output += lineTerminator
  }
  
  console.log(output)
}
