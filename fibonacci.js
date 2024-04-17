/**
 * 
 * Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
 */
function fibonacci(number){
    let tab = [1, 1];
    let prevNum = 1;
    let currNum = 1;
    let totalEven = 0;
    while (currNum <= number){
        let sum = prevNum + currNum;
        if (sum % 2 == 0){
            totalEven += sum;
        }
        tab.push(sum);
        prevNum = currNum;
        currNum = sum;
    }
    console.log(tab);
    console.log(totalEven);
    return totalEven;
}
fibonacci(8);