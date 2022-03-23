console.log('-----------#5');

let number1 = 10;
let number2 = 2;

let sum = number1 + number2;
console.log(`Сумма чисел ${number1} и ${number2} - ${sum}`);

let sub = number1 - number2;
console.log(`Вычитание чисел ${number1} и ${number2} - ${sub}`);

let mult = number1 * number2;
console.log(`Умножение чисел ${number1} и ${number2} - ${mult}`);

let div = number1 / number2;
console.log(`Деление чисел ${number1} и ${number2} - ${div}`)

console.log('-----------#6');
let num = 0;
let str = "";
while (num < 5) {
    num++;
    str +=num + " ";   
}
console.log (str);

console.log('-----------#7');
let num1 = 6;
let str1 = "";
while (num1 > 1) {
    num1--;
    str1 +=num1 + " ";   
}
console.log (str1);

console.log('-----------#8');
function getMarkInfo(condition) {
    if (condition == 10) {
        console.log("У вас максимальный балл");
    } else {
        console.log("У вас средний балл");
    }
}
   getMarkInfo(10)
   getMarkInfo(1)  

console.log('-----------#9');
function getDayInfo(position) {
    switch (position) {
        case 0: 
            console.log('Sunday');
            break;
        case 1: 
            console.log('Monday');
            break;
        case 2: 
            console.log('Tuesday');
            break;
        case 3: 
            console.log('Wednesday');
            break;
        case 4: 
            console.log('Thursday');
            break;
        case 5: 
            console.log('Friday');
            break;
        case 6: 
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('-----------#10');
let abc = ['a', 'b', 'c'];
abc.push('1', '2', '3');
console.log (abc);

console.log('-----------#11');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

console.log(arr3);

console.log('-----------#12');
function countNumber(number) {
    let sum1 = 0;
    for (let i=1; i<=number; i++) {
        sum1 += i;
    }
    console.log(sum1);
  }
  countNumber(5);

