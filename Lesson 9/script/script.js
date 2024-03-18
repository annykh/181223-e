// let array = [12, 35, 213, 0, -32, 0];

// let users = [
//     ['John', 'Bob', 'Tom'],
//     ['Smith', 'Brown', 'James'],
//     [29, 10, 28]
// ];

// // console.log(users[0]); //['John', 'Bob', 'Tom']
// // console.log(users[0][0]); //John

// // console.log(users[1][1]);// Brown

// for(let i=0; i<users.length; i++){
//     for(let k=0; k<users[i].length; k++){
//         // console.log(users[i][k]);
//         console.log(users[k][i]);
//     }
// }


// // i = 0, k = 0, k<3, k++
// // i = 0, k = 1
// // i = 0, k = 2
// // i = 1, k = 0
// // i = 1, k = 1
// // i = 1, k = 2
// // i = 2, k = 0
// // i = 2, k = 1
// // i = 2, k = 2


// let users1 = [
//     ['John', 'Bob', 'Tom'],
//     ['Smith', 'Brown', 'James'],
//     [[2, 12, 2000], [4, 10, 1995], [5, 8, 1999]]
// ];

// // Вывести год рождение Bob
// // console.log(users1[2][1][2]);
// // console.log(`Day ${users1[2][1][0]}, Month ${users1[2][1][1]}, Year ${users1[2][1][2]}`);


// let numbers = [
//     [1, 4, 0, 2],
//     [0, 1, 3, 20],
//     [10, -2, -5, 1]
// ];

// // Найти сумму всех элементов массива 
// let sum = 0;

// for(let i=0; i < numbers.length; i++){
//     for(let k=0; k<numbers[i].length; k++){
//         // console.log(numbers[i][k]);
//         sum = sum + numbers[i][k];
//     }
// }

// console.log(sum);


// Objects


// ключ : значение - свойство

let obj = {}; //empty object

// let object = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
//     ...
// }

let phone = {
    phone_model: '13 pro',
    RAM: '8GB',
    camera: 48
}

let user = {
    first_name: 'John',
    last_name: 'Smith',
    age: 30,
    is_admin: true
};

// console.log(user.first_name);//John
// console.log(user['first_name']);//John
// console.log(user.age);//30

// Добавление свойства
user.gender = 'Male';

// Изменение значения свойства
user.age = 31;

// Удаление свойства
delete user.is_admin;

// console.log(user);

// // Проверка наличие свойства
// console.log('last_name' in user); //true

// for .. in

// for(let key in user){
//     // console.log(key); // все ключи
//     console.log(user[key]);// все значния
// }

let users = {
    first_names: ['John', 'Bob', 'Tom'],
    last_names: ['Smith', 'Brown', 'Hardy']
};

// console.log(users.first_names);//['John', 'Bob', 'Tom']
// console.log(users.first_names[1]); //Bob

for(let key in users){
//    console.log(users[key]);
    for(let i=0; i<users[key].length; i++){
        console.log(users[key][i]);
    }
}

// 1. key = first_names; i = 0; i<3; i++
// 1.1 John
// 1.2 Bob
// 1.3 Tom

// 2. key = last_name; i = 0 ; i<3; i++
// 2.1 Smith
// 2.2 Brown
// 2.3 Hardy

// let user1 = {
//     first_name: 'Lily',
//     last_name: 'Jones',
//     date_of_birth: {
//         day: 4,
//         month: 10,
//         year: 2002
//     }
// }

// console.log(user1.date_of_birth); //{...}
// console.log(user1.date_of_birth.month); //10


// Напишите код, выполнив задание из каждого пункта отдельной строкой:

//     Создайте пустой объект user2.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

let user2 = {};
user2.name = 'John';
user2.surname = 'Smith';
user2.name = 'Pete';
delete user2.name;

// Сравнение объектов

// let num1 = 10;
// let num2 = 10;

// if(num1===num2){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
//true

let user3 = {
    first_name: 'John',
    last_name: 'Smith',
    age: 30
}

let user4 = {
    first_name: 'John',
    last_name: 'Smith',
    age: 30
}

let user5 = user3;

if(user3===user4){
    console.log(true);
}
else{
    console.log(false);
}
// false

if(user3===user5){
    console.log(true);
}
else{
    console.log(false);
}
// true


// const с объектами

// const name = 'Lily';
// name = 'John'; //error


const obj1 = {
    title: 'Text'
}

obj1.title = 'Text1';

// константных объектов нет


let phones = [
    {
        name: 'iPhone 13',
        price: 800,
        quantity: 10
    },
    {
        name: 'iPhone 13 pro',
        price: 900,
        quantity: 3
    },
    {
        name: 'iPhone 14',
        price: 1000,
        quantity: 10
    },
    {
        name: 'iPhone 15 pro',
        price: 1200,
        quantity: 4
    }
] 

for(let i=0; i<phones.length; i++){
    console.log(phones[i]);
}

// Вывести только имена товаров
for(let i=0; i<phones.length; i++){
    console.log(phones[i].name);
}

// Вывести имена только тех товаров, кол/во которых меньше 5

for(let i=0; i<phones.length; i++){
    if(phones[i].quantity<5){
        console.log(phones[i].name);
    }
}
