function printAllNumbersThenAllPairSums(numbers: number[]): void {
  console.log('These are the numbers:');
  numbers.forEach(number => console.log(number));

  console.log('\nThese are their sums:');
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i] + numbers[j]);
    }
  }
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbersThenAllPairSums(myNumbers);