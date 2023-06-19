// let namePeople = "Kamila";
// // ё `
// alert(`Привет, ${namePeople}!!!`);

// let element = document.getElementById('el1');
// console.log(element);
// // добавили класс
// element.classList.add('active');
// // удалили класс
// element.classList.remove('active');
let count = 0;
// все возможные наборы
function getRandomColor() {
    // получаем цвет в HEX формате
    let color = '#';
    // все цифры
    let variant = '0123456789ABCDEF';
    
    for (let i = 0; i < 6; i++) {
        // формируем рандомный цвет
        color += variant[Math.floor(Math.random() * 16)];
    }
    return color;
}
function chanchedColor() {
    // получаем массив
    let box = document.getElementsByClassName('box');
    // получаем первый элемент
    let element = box[0];
    // Math.random() * 10 - 0 до 1
    // if (count % 2 == 0) {
    //     // добавляем класс
    //     element.classList.add('activeBox');
    // }
    // else {
    //     element.classList.remove('activeBox');
    // }
    // count++;
    // для получения случайного цвета
    let randColor = getRandomColor();
    element.style.cssText=`background-color: ${randColor};`;
    // проверяет есть ли такой класс
    //element.classList.toggle('activeBox');
}

let btn = document.getElementById('btn');
// console.log(btn);
btn.addEventListener('click', chanchedColor);


let btn1 = document.getElementById('btn1');
function name_user(){
    let name = prompt("Привет, странник! Давай познакомимся! Как тебя зовут?");
    if (!name || name=="null")
        name = 'незнакомец';
    confirm("Добро пожаловать в волшебный мир, " + name + "!");
    return name;
    
}
btn1.addEventListener('click', change_text);
function change_text(){
    let element = document.getElementById('btn1');
    element.textContent = 'Добро пожаловать, ' + name_user() + '!'
    console.log(element)
}