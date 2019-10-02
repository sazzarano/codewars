//Please See Txt File for the Rules of the Challenge!
const rowSumOddNumbers = n => n ** 3;

console.log(rowSumOddNumbers(3));

/*Original Code Block, Pre-Refactor
function rowSumOddNumbers(n) {
    return n ** 3;
}
*/

/*SOLUTION:
This was an easier solution than I initially thought. I had 
started by trying to find patterns of numbers within the rows
and the sums themselves.Mathematically speaking, each row's 
sum is equal to the row's number cubed.
*/