// document.querySelector
// document.querySelectorAll

// innerHTML
// innerText

// Работа с атрибутами

// let link = document.querySelector('a');

// link.setAttribute('href', 'https://www.amazon.com/');
// link.innerText = 'Amazon';
// link.setAttribute('target', '_blank');

// console.log(link.getAttribute('href'));
// console.log(link.hasAttribute('href')); //true
// console.log(link.hasAttribute('name')); //false
// link.removeAttribute('target');


// Element.setAttribute('имя атрибута', 'значение') // добавить или изменить
// Element.getAttribute('имя атрибута') // получить значение
// Element.hasAttibute('имя атрибута') // проверить наличие 
// Element.removeAttribute('имя атрибута') // удалить атрубит


// let image = document.querySelector('img');

// image.setAttribute('src', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
// image.setAttribute('alt', 'Cat');

// Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.

// let images = document.querySelectorAll('.main img');
// let new_url = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

// for(let i=0; i<5; i++){
//     images[i].setAttribute('src', new_url);
// }

// Написать скрипт, который находит картинки в блоке с классом main и удаляет посление две картинки(удалить атрибуты).

// for(let i=images.length-1; i>images.length-3; i--){
//     images[i].removeAttribute('src');
//     images[i].removeAttribute('alt');
// }

// Создание элементов

document.createElement('tag_name');

let paragraph1 = document.createElement('p');
paragraph1.innerText = 'New paragraph';
document.body.append(paragraph1); //в конец body вставить <p>

let new_link = document.createElement('a');
new_link.innerText = 'Amazon';
new_link.setAttribute('href', 'https://www.amazon.com/');

let link1 = document.querySelector('.link1');
link1.before(new_link);
link1.after(new_link);

// Напишите скрипт для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью prompt 5 раз.
// 2. Создавайте элементы <li> и добавляйте его к <ul>.

// <ul>
    // <li></li>
    // <li></li>
    // <li></li>
    // <li></li>
    // <li></li>
// </ul>

// let list = document.createElement('ul');
// document.body.append(list);

// for(let i=0; i<5; i++){
//     let data = prompt('Enter the text for list');

//     let li = document.createElement('li');
//     li.innerText = data;
//     list.append(li);
// }

// Создать множество параграфов с числами от 0 до 19 и вставить в блок с классом main.

// 1. Найти див с классом main
// 2. Цикл (0-20)
//     Создать параграф
//     Присвоить текст (счетчик цикла)
//     Вставить параграф в див

let main = document.querySelector('.main');

for(let i=0; i<20; i++){
    let p = document.createElement('p');
    p.innerText = i;
    main.append(p);
}

// Создать 5 параграфов, задать им текст(text 1, text 2, text 3, text 4, text 5) и добавить в HTML- документ в div с классом root

let root = document.querySelector('.root');

for(let i = 0; i < 5; i++){
    let p = document.createElement('p');
    p.innerText = `Text ${i+1}`;
    root.append(p);
}

// Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в див с классом names.

let user_names = ['Tom', 'Jack', 'Bob', 'Nick', 'Alex', 'John'];
let names_block = document.querySelector('.names');

for(let i=0; i<user_names.length; i++){
    let p = document.createElement('p');
    p.innerText = user_names[i];
    names_block.append(p);
}

// Создать массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в див с классом links.

// <a href="https://facebook.com" target="_blank">facebook</a>
// <a href="https://youtube.com" target="_blank">youtube</a>
// <a href="https://google.com" target="_blank">google</a>
// <a href="https://github.com" target="_blank">github</a>  

let links = [
    {
        link: 'https://facebook.com',
        title: 'facebook'
    },
    {
        link: 'https://youtube.com',
        title: 'youtube'
    },
    {
        link: 'https://google.com',
        title: 'google'
    },
    {
        link: 'https://github.com',
        title: 'github'
    }
]

let links_block = document.querySelector('.links');

for(let i=0; i<links.length; i++){
    // console.log(links[i].link);
    // console.log(links[i].title);
    // 1. создать тег а
    let a = document.createElement('a');
    // 2. задать атрибут href
    a.setAttribute('href', links[i].link);
    // 3. задать атрибут target - _blank
    a.setAttribute('target', '_blank');
    // 4. записать текст
    a.innerText = links[i].title;
    // 4. вставить тег в див
    links_block.append(a);
}


// Удаление элементов
// remove()

let google_link = document.querySelector('.link1');
google_link.remove();


// let obj = {
//     name: 'John',
//     age: 20,
//     salary: 200
// }

// for(let key in obj){
//     // console.log(obj[key]);
//     if(typeof(obj[key])=='number'){
//         obj[key] = obj[key] * 2;
//     }
// }

// console.log(obj);

