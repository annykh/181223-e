// Вывод данных в консоль
console.log("Hello world!");

console.log(123);

// Переменные
// let имя_переменной = значение;

let pi = 3.14;

console.log(pi); //3.14
console.log('pi'); //pi

// имя_переменной = новое_значение 
pi = 3;

console.log(pi); //3

let user_name = 'John';
console.log(user_name); //John

// a-z
// A-Z
// _ $
// 0-9

// CamelCase
// snake_case

// user
// User

const first_name = 'Laura';
// first_name = 'Inna'; //error


// Типы данных

// Number
// String
// Boolean
// Object

// Number - Число

let number1 = 12;
let number2 = 12.23;

// Infinity
// -Infinity
// NaN //not a number

console.log(12/0); //Infinity
console.log(-12/0); //-Infinity

console.log('string'/2); //NaN
console.log('string'*2); //NaN
console.log(NaN*10); //NaN

// Базовые математические действия
console.log(2+5); // 7
console.log(5-3); // 2
console.log(4*3); // 12
console.log(6/3); //2
console.log(5/2); //2.5
console.log(5**2); //25
console.log(11%2); //1 - остаток от деления

// String - Строки

// "" or ''
let str1 = 'Hello';
let str2 = "Hello";
console.log(str1); //Hello
console.log(str2); //Hello

// Конкатенация и интерполяция

// Конкатенация
let user_first_name = 'John';
let user_surname = 'Smith';
let user_age = 20;

// user_first_name user_surname

console.log(user_first_name + ' ' + user_surname);

// Hi, my name is <user_first_name> <user_surname>. I'm <user_age>.

console.log('Hi, my name is ' + user_first_name + ' ' + user_surname + ". I'm " + user_age + '.');


// Интерполяция

console.log(`Hi, my name is ${user_first_name} ${user_surname}. I'm ${user_age}.`);

// Тип переменных
typeof(123); //number
typeof('Hello'); //string
typeof(NaN); //number
console.log(typeof(Infinity)); //number
console.log(typeof(user_first_name)); //string

// Ввод данных 
// let result = prompt('Enter the result', 0);

// console.log(result);

// let result2 = prompt('Enter the result');

// let age = prompt('enter your age');

// console.log(age);//'12'
// console.log(typeof(age));//string

// Преобразование из строк в число
let age = Number('12'); 
console.log(age); //12
console.log(typeof(age)); //number

// let year = prompt('Enter the year...');
// let num_year = Number(year);

// console.log(year);
// console.log(num_year);


// let year = prompt('Enter the year...');
// let num_year = +year;

// console.log(year);
// console.log(num_year);

console.log(Number('abc'));//NaN
console.log(Number('abc123'));//NaN


// Преобразование из чисел в строку

console.log(String(123));

// Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат.

// let num1 = +prompt('enter the number');

// console.log(num1**2);

// Задача: Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число. 

// let num2 = +prompt('enter the first number');
// let num3 = +prompt('enter the second number');

// console.log(num2+num3);

// Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию.

let r = 12;
let g = 34;
let b = 14;

console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
console.log(`rgb(${r}, ${g}, ${b})`);


// "Логика" JS

console.log('3' + 3); // конкатенация '33'
console.log(+'3' + 3); // 6
console.log('9' / 3); //3
console.log('3' * 4); //12
console.log('12' - 2); //10
console.log('abc' / 3); //NaN

console.log('20' + '2' - '2'); // 202 - 2 // 200


// Условное ветвление
// if .. else if.. else

// if(Условие1){
//     действие
// }
// else if(Условие2){
//     действие
// }
// ...
// else{
//     действие 
// }

// let age1 = +prompt('enter your age');

// if(age1>=18){
//     console.log('Доступ открыт');
// }
// else{
//     console.log('Доступ закрыт');
// }

// > >= < <= == === != !==

// && and || or

let num4 = '13';


// Проверяет только значения, без тип -> true
if(num4 == 13){
    console.log('true');
}
else{
    console.log('false');
}

// Проверятеся и тип, и значение -> false
if(num4 === 13){
    console.log('true');
}
else{
    console.log('false');
}

let num5 = 10;
if(num5 > 0 && num5%3==0){
    console.log('Больше 0 и кратен 3');
}
else if(num5 > 0 && num5%2==0){
    console.log('Больше 0 и кратен 2');
}
else {
    console.log('Больше 0, но не кратен 2 или 3, или отрицательные');
}

