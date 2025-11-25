// Task 1
//function CheckDivisibility(num) {
    //if (num % 3 === 0 && num % 7 === 0)
       // return true;
    //return false;
///}

//console.log(CheckDivisibility(20));

// Task 2
// function Factorial(n) {
//     let factorial=1;
//     if (n === 0 || n === 1)
//         return 1;
//     else if (n < 0)
//         return -1;
//     for (let i = 2; i <= n; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }
// console.log(Factorial(5));

// Task 3

// function CalculateSquareEven(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
//             sum += arr[i] * arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(CalculateSquareEven(arr));

// Task 4

// function CheckUser(mail, password) {

//     const validMail = "emil@code.edu.az";
//     const validPassword = "12345";
//     if (mail.trim() === validMail && password === validPassword) {
//         return "Login successful";
//     }
//     return "Invalid email or password";
// }
// console.log(CheckUser("emil@code.edu.az ", "12345"));

// Task 5


// function SumOdd(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(SumOdd(arr));

// Task 6

function CountEven(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(CountEven(arr));