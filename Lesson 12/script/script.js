// setAttribute()
// getAttribute()
// hasAttribute()
// removeAttribute()

// let p = document.querySelector('p');

// // p.setAttribute('class', 'p1');
// // p.setAttribute('class', 'p_size');

// console.log(p.classList);

// p.classList.add('new_class'); //добавить класс
// p.classList.remove('change_font'); //удалить класс
// console.log(p.classList.contains('p1')); //проверить наличие класса true/false
// p.classList.toggle('p1'); //если класс есть, удаляет, если класса нет, добавляет
// p.classList.toggle('p1');


// function function_name(param1, param2){
//     ...
// }

// function_name();


// callback

// function new_function(callback){
//     ...
// }

// События

// События мыши:
// • click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при 
// касании).
// • contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// • mouseover/ mouseout – когда мышь наводится на / покидает элемент.
// • mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// • mousemove – при движении мыши.

// События на элементах управления:
// • submit – пользователь отправил форму <form>.
// • focus – пользователь фокусируется на элементе, например нажимает на <input>.

// Клавиатурные события:
// • keydown и keyup – когда пользователь нажимает/ отпускает клавишу.

// let button = document.querySelector('.btn');

// Анонимная функция
// button.addEventListener('click', function(){console.log('Clicked');})

// function btn_click(){
//     console.log('Clicked');
// }

// button.addEventListener('click', btn_click);

// button.addEventListener('click', btn_click2)

// function btn_click2(){
//     let new_p = document.createElement('p');
//     new_p.innerText = 'New paragraph';
//     document.body.append(new_p);
// }

// button.addEventListener('mouseover', btn_mouseover);

// function btn_mouseover(){
//     button.style.color = 'green';
//     button.style.backgroundColor = 'white';
// }

// button.addEventListener('mouseout', btn_mouseout);

// function btn_mouseout(){
//     button.style.color = '';
//     button.style.backgroundColor = '';
// }

// Удаление события
// button.removeEventListener('click', btn_click);


// Свойство style
// let paragraph1 = document.createElement('p');
// paragraph1.style.color = 'red';
// paragraph1.style.border = '5px solid black';
// paragraph1.style.fontSize = '20px';

// paragraph1.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium saepe quod labore commodi, assumenda qui, laboriosam dolores architecto voluptas, consequuntur aliquam aut animi quia sed hic debitis molestiae recusandae.';

// document.body.append(paragraph1);

// Сброс стилей 
// paragraph1.style.color = '';
// paragraph1.style.fontSize = '';


// Задание 1: При нажатии на кнопку создать квадратный div с рамкой (все шаги  сделать с помощью JS).

let button = document.querySelector('.btn');

button.addEventListener('click', btn_click);

function btn_click(){
    let block = document.createElement('div');
    block.style.width = '100px';
    block.style.height = '100px';
    block.style.border = '5px solid blue';
    block.style.marginBottom = '20px';
    button.after(block);
}


// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. 
// При клике на параграф текст должен меняться на звездочки => *****

// let names = ['John', 'Tom', 'Bob', 'Lily', 'Laura'];


// for(let i=0; i<names.length; i++){
//     let p = document.createElement('p');
//     p.innerText = names[i];
//     document.body.append(p);
//     p.addEventListener('click', function(){
//         p.innerText = '*****';
//     });
// }

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии  на какую-либо карточку присвоить ей класс active. В классе  active должны быть стили, которые меняют цвет текста и  цвет заднего фона местами.

// for(let i=0; i<10; i++){
//     let card = document.createElement('p');
//     card.innerText = i;
//     document.body.append(card);
//     card.addEventListener('click', function(){
//         card.classList.add('active');
//     })
// }

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся (через classList).

for(let i=0; i<10; i++){
    let card = document.createElement('p');
    card.innerText = i;
    document.body.append(card);
    card.addEventListener('click', function(){
        card.classList.toggle('active');
    })
}

// Создать квадратный div с рамкой и при наведении курсора на него фоновый цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).

let block = document.createElement('div');
block.style.border = '5px solid blue';
block.style.width = '100px';
block.style.height = '100px';
document.body.append(block);

function changeColor(){
    block.style.backgroundColor = prompt('enter the color');
}

block.addEventListener('mouseover', changeColor);

// Доработать прошлий скрипт так, чтобы при покидании курсора цвет удалился.

function block_mouseout(){
    block.style.backgroundColor = '';
}

block.addEventListener('mouseout', block_mouseout);

// Написать цикл, который создает множество div-ов c  цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

for(let i=0; i<=255; i+=5){
    let block = document.createElement('div');
    block.style.width = '100%';
    block.style.height = '50px';
    block.style.backgroundColor = `rgb(128, 128, ${i})`;
    // block.style.marginBottom = '10px';
    document.body.append(block);
}
