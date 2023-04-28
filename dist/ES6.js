"use strict";
const numbers1 = [1, 2];
const numbers2 = [3, 4, 5, 6];
const numbers = [...numbers1, ...numbers2];
const squared = (n) => n * n;
const squares = numbers.map(squared);
const isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
const evenSquares = squares.filter((n) => isEven(n));
const firstEvenSquare = evenSquares[0];
const secondEvenSquare = evenSquares[1];
console.log(`Numbers: ${numbers}\nSquares: ${squares}\nEven Squares: ${evenSquares}\nExtracted Numbers: ${firstEvenSquare}, ${secondEvenSquare}`);
