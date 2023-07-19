//Задание 1 
function elementsCount() {
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }
}
elementsCount(arr);

//Задание 2 
function getNumber(num) {
    if (num <= 1) {
        return 'введите число побольше';
    } else if (num > 1000) {
        return 'введите число меньше'
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return 'непростое число';
        } else {
            return 'простое число';
        }
    }
}
getNumber(7)

//Задание 3 
function sum(x) {
    return function(y) {
        return x + y;
    };
};
let result = sum(7);
console.log(result(0), result(1), result(2));
console.log(sum(1)(2), sum(2)(2), sum(40)(2));


//Задание 4 
function getNumbers(a, b) {
    let int = setInterval(() => {
        console.log(++a);
        if(a >= b) clearInterval(int);
    }, 1000);
}
getNumbers(7, 15);

//Задание 5
const exponentiation = (x, n) => {
    let res = x ** n;
    return res;
}
exponentiation(2, 7);
exponentiation(5, 6);
exponentiation(2, 4);


