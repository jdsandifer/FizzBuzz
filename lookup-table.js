// This approach uses a lookup table. I only went to 30, 
// but the answers could be pre-calculated up to very large numbers.
//
// While this may not be useful in practice for this particular problem, 
// it does illustrate another approach to this type of problem which 
// would be useful in situations where the cost of 
// storing and accessing the answers is less than the cost
// of "computing" the answers each time they're needed.

const fizzBuzz = (max) => {
  const fizzBuzzAnswerFor = {
    1: 1,
    2: 2,
    3: "fizz",
    4: 4,
    5: "buzz", 
    6: "fizz",
    7: 7,
    8: 8,
    9: "fizz",
    10: "buzz", 
    11: 11,
    12: "fizz",
    13: 13,
    14: 14,
    15: "fizzbuzz", 
    16: 16,
    17: 17,
    18: "fizz",
    19: 19,
    20: "buzz", 
    21: "fizz",
    22: 22,
    23: 23,
    24: "fizz",
    25: "buzz", 
    26: 26,
    27: "fizz",
    28: 28,
    29: 29,
    30: "fizzbuzz"
  }

  for (let currentNumber = 1; currentNumber <= max && currentNumber <= 30; currentNumber++) {
    console.log(fizzBuzzAnswerFor[currentNumber])
  }
}
