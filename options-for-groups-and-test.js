// I've added another option for the test to be 
// performed on the numbers to see whether the 
// message should be displayed. Again, I've 
// provided a default so code with other
// function signatures won't break.

const fizzBuzz = (max, terms = defaultTerms, test = modulo) => {
  let output = ""
  const lineTerminator = "\n"
  
  for (let i = 1; i <= max; i++) {
    let outputToAdd = ""

    for (let t = 0; t < terms.length; t++) {
      const currentNumber = terms[t].number
      const currentMessage = terms[t].message
      const givenTestPassed = test(i, currentNumber)

      if (givenTestPassed) {
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

const defaultTerms = [{ number: 3, message: "fizz"}, {number: 5, message: "buzz"}]
const modulo = (numberToTest, possibleDivisor) => {
  return numberToTest % possibleDivisor === 0
}
