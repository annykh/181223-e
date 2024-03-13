// let number1 = 10;
// number1 = 20;

// const number2 = 20;
// number2 = 10; //error

// var number3 = 30;
// number3 = 10;

// if(number1 == 20)
// {
//     let result = 'Ok';
//     console.log(result); //Ok
// }

// console.log(result); //result is not defined

// if(number1 == 20)
// {
//     var result1 = 'Ok';
//     console.log(result1); //Ok
// }

// console.log(result1); //Ok

// Глобальная переменная
// let number4 = 123;

// if(number1 == 20)
// {
//     // Локальная переменная
//     let number4 = 20;
//     console.log(number4); //20
// }

// if(number3 == 10){
//     // Локальная переменная
//     let number4 = 35;
//     console.log(number4); //35
// }

// console.log(number4); //123


// Boolean

// true 
// false

// if(number1 == 20){ //if(true)

// }

// if(number1 > 20){ //if(false)

// }

// if(0){ //0, "", null, undefined, NaN -> false

// }

// let age = +prompt('enter your age');

// if(age){ //если age = 0, false, если >0 или <0 то true
//     console.log('Good');
// }



// Массивы / Array

let array = []; //пустой массив

let fruits = ['apple', 'banana', 'mango'];

console.log(fruits);
// Результат:
// ['apple', 'banana', 'mango']
// 0: "apple" индекс/номер: значение
// 1: "banana" индекс/номер: значение
// 2: "mango" индекс/номер: значение
// length: 3 длина/кол/во элементов

console.log(fruits[0]); //apple
console.log(fruits[2]); //mango
console.log(fruits.length); //длина массива
console.log(fruits[fruits.length-1]);//последний элемент

// Добавить элемент в начало массива
fruits.unshift('Avocado');

// Добавить элемент в конец массива
fruits.push('Kiwi', 'Pear');

// Удалить первый элемент массива
// fruits.shift();
let the_first_elem = fruits.shift();
console.log(the_first_elem);//первый элемент который удалили

// Удалить последний элемент массива
// fruits.pop();
let the_last_elem = fruits.pop();
console.log(the_last_elem); //последний элемент который удалили

console.log(fruits);

// fruits.splice(start, deleteCount, 'elem1', 'elem2'..)

// fruits.splice(1, 1); //удаление второго элемента
// fruits.splice(1, 2); //начиная со второго эл. удаляем два элемента
// fruits.splice(2, 0, 'orange', 'pineapple')//добавление элеменов начиная с индекса 2
// fruits.splice(2, 2, 'orange', 'pineapple');//удаление двух эл. начиная с индекса 2 и добавление эл. начиная с индекса 2
// fruits.splice(2, 1, 'orange', 'pineapple');//удаление элемента с индексом 2 и добавление эл.-ов начиная с индекса 2

// let deleted_elem_of_fruits = fruits.splice(1, 2);
// console.log(deleted_elem_of_fruits);



// Удалить из таблицы mango

console.log(fruits.indexOf('mango')); //2

fruits.splice(fruits.indexOf('mango'), 1);



// Заменить banana на pineapple
// fruits[1] = 'pineapple';
fruits[fruits.indexOf('banana')] = 'pineapple';

console.log(fruits);

// Задание: 
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец. 
// 3. Замените значение «Блюз» на «Классика». 
// 4. Удалите первый элемент массива и покажите его в консоль.
// 5. Вставьте Рэп и Регги в начало массива.

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[styles.indexOf('Блюз')] = 'Классика';
// let deleted = styles.splice(0, 1);
// console.log(deleted); //['Джаз']
let deleted1 = styles.shift();
console.log(deleted1); // Джаз
styles.unshift('Рэп', 'Регги');
console.log(styles);

// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.

// let numbers = [1, 4, 2, 5, 3];
// let numbers1 = [];//1, 16, 4, 25, 9

// numbers1.push(numbers[0]**2, numbers[1]**2, numbers[2]**2, numbers[3]**2, numbers[4]**2);

// console.log(numbers);
// console.log(numbers1);


// Инкремент и декремент
// num++
// num = num + 1
// num--
// num = num - 1

// for(начало; условие; шаг){
    // Действия
// }

// for(let num = 1; num <= 5; num++){
//     console.log(num);
// }

// 1. let num = 1, true, num+1
// 1
// 2. num = 2, true, num+1
// 2
//3. num = 3, true, num+1
// 3
//4. num = 4, true, num+1
// 4
//5. num = 5, true, num+1
// 5
// 6. num = 6, false итерация выхода

// Обратный цикл

// for(let num = 5; num >= 1; num--){
//     console.log(num);
// }


// for(let num = 1; num < 10; num+=2){
//     console.log(num); // 1, 3, 5, 7, 9
// }

// for(let num = 1; num < 10; num*=2){
//     console.log(num); //1, 2, 4, 8
// }


// for(let num = 0; num < 10; num++){
//     console.log(num);
//     if(num == 2){
//         break;//досрочно прекращает работу цикла
//     }
// }
// 0, 1, 2

// for(let num = 0; num < 10; num++){
//     if(num == 2){
//         break;//досрочно прекращает работу цикла
//     }
//     console.log(num);
// }
// 0, 1


// for(let num = 0; num < 10; num++){
//     if(num == 2){
//         continue; //прерывает выполнение текущей итерации
//     }
//     console.log(num);
// }
// 0, 1, 3-9


let numbers2 = [1, 2, 6, 20, 24, 6, 2, 10, -1, 0];

// Вывести все элементы массива
// console.log(numbers2[0]);
// console.log(numbers2[1]);
// console.log(numbers2[2]);
// console.log(numbers2[3]);
// ...

// for(let index = 0; index < numbers2.length; index++){
//     console.log(numbers2[index]);
// }

// Вывести только четные числа из массива
// for(let i = 0; i < numbers2.length; i++){
//     if(numbers2[i]%2==0 && numbers2[i]!=0){
//         console.log(numbers2[i]);
//     }
// }

// Найти сумму элементов массива
// let sum = 0;

// for(let i=0; i<numbers2.length; i++){
//     // sum = sum + numbers2[i];
//     sum += numbers2[i];
// }


// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.

let numbers = [1, 4, 2, 5, 3];
let numbers1 = [];//1, 16, 4, 25, 9

for (let i=0; i<numbers.length; i++){
    numbers1.push(numbers[i]**2);
}

console.log(numbers);
console.log(numbers1);
