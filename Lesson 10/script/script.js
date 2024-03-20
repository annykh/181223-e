// function

// console.log();
// prompt();

// function function_name(param1, param2){
//     // body
// }

// function_name()

// function showMessage(){
//     console.log('Hello!');
// }

// showMessage();//Hello

// let num = 3;
// console.log(num);

// showMessage();//Hello


// let username = prompt('Enter your name');
// showMessage();

// function showMessage(){
//     console.log('Hello ' + username);
// }

// let username = 'John';

// console.log(username);//John

// function showMessage(){
//     let username = 'Bob';
//     console.log('Hello ' + username);
// }

// showMessage(); //Hello Bob


// function showMessage(user_name){//параметр
//     console.log('Hello ' + user_name);
// }

// showMessage('John')//аргумент;
// showMessage('Bob');
// showMessage(prompt('Enter your name'));

// function Max(a, b){
//     if(a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }

// Max(10, 0); //10
// Max(-9, 5); //5
// Max(1300, 1400); //1400

// let num1 = 20;
// let num2 = 19;
// Max(num1, num2);//20
// Max(+prompt('enter the first number'), +prompt('enter the second number'));

// Значения по умолчанию
// function getSum(a, b){
//     let sum = a + b;
//     console.log(sum);
// }

// getSum(100, 20); //120
// getSum();//NaN

// function showMessage(user_name){
//     console.log('Hello ' + user_name);
// }

// showMessage();//Hello undefined

// function getSum1(a=0, b=0){
//     let sum = a + b;
//     console.log(sum);
// }

// getSum1(100, 20); //120
// getSum1();//0
// getSum1(20);//20
// getSum1(undefined, 30);//30

// function showMessage1(user_name='USERNAME'){
//     console.log('Hello ' + user_name);
// }

// showMessage1();//Hello USERNAME

// Возврат значения

// function getMin(a, b){
//     if(a>b){
//         return b;
//     }   
//     return a;
// }

// console.log(getMin(20, 10));//10

// let result = getMin(+prompt('enter the first number'), +prompt('enter the second number'));
// console.log(result);


// function getSum(a, b){
//     return a+b; //выход из функции
//     let sum = a+b;//не будет работать
// }


// Создать таблицу 
// Получить ее
// Показать на экране

// createTabel()
// getTable()
// showTable()


// Function expression
// Функциональние выражение

// showMessage(); //Error

// let showMessage = function(){
//     console.log('Hello');
// }

// showMessage(); //Hello

// Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// function getArraySum(array){
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//         sum = sum + array[i];
//     }
//     return sum;
// }

// console.log(getArraySum([20, 1, 0])); //21
// console.log(getArraySum([12, -2, 0, -12, 3, 56, 0])); //57
// let array = [12, 0, 4, 7];
// console.log(getArraySum(array)); //23

// Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function getNewArray(array) {
//     let newarray = [];

//     for(let i=0; i<array.length; i++){ 
//         if(array[i]%2==0 && array[i]!==0){
//             newarray.push(array[i]);
//         }
//     }
//     return newarray;
// }

// console.log(getNewArray([12, -2, 0, -12, 3, 56, 0]));
// let array = [12, 0, 4, 7, 1, -4, 5];
// console.log(getNewArray(array)); 


// DOM

// Поиск элемента

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName

// document.querySelector
// document.querySelectorAll

// class name - .name
// id name - #name
// tag name - tag

// let paragraph1 = document.querySelector('p'); //первый параграф из HTML

// console.log(paragraph1);

// let paragraph2 = document.querySelector('.p2');

// console.log(paragraph2);


// innerText - текст(не входят теги и атрибуты)
// innerHTML - содержимое(вложенные теги, их атрибуты и текст)

// let paragraph3 = document.querySelector('.p3');

// console.log(paragraph3);
// console.log(paragraph3.innerHTML);// как string
// console.log(paragraph3.innerText);


// Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.

// let paragraph4 = document.querySelector('.changeText');

// paragraph4.innerText = 'Привет';

// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);//NodeList

// // console.log(paragraphs[1]);//Второй параграф

// for(let i=0; i<paragraphs.length; i++){
//     // console.log(paragraphs[i]);
//     // console.log(paragraphs[i].innerText);
//     // paragraphs[i].innerText = `Text ${i+1}`;
//     paragraphs[i].innerText = prompt('enter the text');
// }

// Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.
let paragraphs = document.querySelectorAll('p');

for(let i=0; i<3; i++){
    paragraphs[i].innerText = prompt('enter the text')
}
