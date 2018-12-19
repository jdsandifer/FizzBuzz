// This time I'm using a loop and conditionals
// except no output is generated until the end.
// This approach to problems can be useful where
// lots of data needs to be output, written to a file,
// or transmitted across a network. One large burst
// of data can often be faster than many smaller
// transmissions of data spread out over time. 

const fizzBuzz = (max) => { 
  const lineTerminator = "\n"
  let output = ""
  
  for (let i = 1; i <= max; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0

    if (isDivisibleByThree && isDivisibleByFive) {
      output += "fizzbuzz" + lineTerminator
    } else if (isDivisibleByThree) {
      output += "fizz" + lineTerminator
    } else if (isDivisibleByFive) {
      output += "buzz" + lineTerminator
    } else {
      output += i + lineTerminator
    }
  }

  console.log(output)
}
