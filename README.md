# Inefficient Nested Loop in TypeScript

This repository demonstrates an example of inefficient nested loops in TypeScript and provides an optimized solution.

## Bug

The `printAllNumbersThenAllPairSums` function uses nested loops to calculate and print all possible pair sums from an input array. This results in a time complexity of O(n^2), which is inefficient for larger arrays.

## Solution

The optimized solution uses a single loop to achieve the same result with a time complexity of O(n), significantly improving performance for larger inputs.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Compile and run the TypeScript code using the TypeScript compiler (tsc) and Node.js.