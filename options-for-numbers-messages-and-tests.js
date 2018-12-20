// Here I've modified the approach with options 
// to take an array of number and message groups.
// This allows for selection of the number to check
// for divisibility, the message to display, and the 
// quantity of groups to check. Providing defaults
// again keeps us from breaking code that uses the 
// simple message signature.

const fizzBuzz = (max, terms = [{ number: 3, message: "fizz"}, {number: 5, message: "buzz"}]) => {
  let output = ""
  const lineTerminator = "\n"
  
  for (let i = 1; i <= max; i++) {
    let outputToAdd = ""

    for (let t = 0; t < terms.length; t++) {
      const currentNumber = terms[t].number
      const currentMessage = terms[t].message
      const divisibleByCurrentNumber = i % currentNumber === 0

      if (divisibleByCurrentNumber) {
        outputToAdd += currentMessage
      }
    }

    if (outputToAdd === "") {
      outputToAdd += i
    }

    outputToAdd += lineTerminator
    output += outputToAdd
  }
  
  console.log(output)
}
