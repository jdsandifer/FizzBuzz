// This approach starts with a list of all of 
// the numbers to be considered and then alters
// the list by replacing the numbers with the 
// words where appropriate before outputting 
// the lot.

const fizzBuzz = max => {
  const numbers = range(max)
  const numbersAndWords = numbers.map(num => {
    const divisibleByThree = num % 3 === 0
    const divisibleByFive = num % 5 === 0

    if (divisibleByThree && divisibleByFive) {
      return "fizzbuzz"
    } else if (divisibleByThree) {
      return "fizz"
    } else if (divisibleByFive) {
      return "buzz"
    } else {
      return num
    }
  })
  const output = numbersAndWords.join("\n")
  console.log(output)
}

const range = max => {
  const indexPlusOne = (_, i) => i + 1
  return Array.apply(null, {length: max}).map(indexPlusOne)
}
