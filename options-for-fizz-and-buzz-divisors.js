// Here again is the approach that compiles the output
// along the way and displays it in one burst at the end.
// However, I've modified it to allow for a choice of
// numbers to be used as the divisors. This is an example
// of providing flexibility for future (or imminent) modification.
// Providing default parameters prevents code that still uses
// the simpler message signature from breaking with this change.
// It's fun to play with different divisors and notice
// the patterns of fizz's and buzz's produced. 
// Sometimes it's easy to see them, and sometimes it's 
// hard to pick out the pattern. Try it for yourself!

const fizzBuzz = (max, fizzDivisor = 3, buzzDivisor = 5) => {
  let output = ""
  const lineTerminator = "\n"
  
  for (let i = 1; i <= max; i++) {
    const divisibleByFizzDivisor = i % fizzDivisor === 0
    const divisibleByBuzzDivisor = i % buzzDivisor === 0

    if (divisibleByFizzDivisor) {
      output += "fizz"
    }
    if (divisibleByBuzzDivisor) {
      output += "buzz"
    }
    if (!divisibleByFizzDivisor && !divisibleByBuzzDivisor) {
      output += i
    }
    output += lineTerminator
  }
  
  console.log(output)
}
