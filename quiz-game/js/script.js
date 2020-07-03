
window.onload = function() {

        //обьект с вопросами
        let questions = ["Вопрос 1", "Вопрос 2", "Вопрос 3", "Вопрос 4", "Вопрос 5"];
        //обьект с вариантами
        let options = ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "Ответ 5", "Ответ 6", "Ответ 7", "Ответ 8", "Ответ 9", "Ответ 10","Ответ 11", "Ответ 12", "Ответ 13", "Ответ 14", "Ответ 15", "Ответ 16", "Ответ 17", "Ответ 18", "Ответ 19", "Ответ 20",];
        //обьект с ответами
        let answers = ["0","3","3","1","0"];
        //массив с фото
        let imgs = ['img0.jpg','img1.jpg','img2.jpg','img3.png','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg'];
        //переменная этапа
        let level = 0;
        //переменная ответа пользователя
        let userResponse; 
        //переменная ответа компьютера
        let computerRespons;
        //перменная кнопки закрытия
        let close = document.getElementById('close');
        //еременная с правильным ответом
        let bPopupAnswer = document.getElementById('b-popup-answer');
        //переменная с счетом игрока
        let userScore = 0;
        //переменная с счетом компьютера
        let computerScore = 0;
        //Массив из кнопок
        let button = document.querySelectorAll('button');
        //функция показа вопроса и вариантов ответа
function show(stage) {
    document.getElementById('slaid__question').innerText = questions[stage];
    document.getElementById('option1').innerText = options[stage * 4 + 0];
    document.getElementById('option2').innerText = options[stage * 4 + 1];
    document.getElementById('option3').innerText = options[stage * 4 + 2];
    document.getElementById('option4').innerText = options[stage * 4 + 3];
    };
    //функция генерации случайного числа от 0 до 3 
function getRandomInt(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
};

//функция изменение стиля display элемента
function expectations(id,style){
        document.getElementById(id).style.display = style;
};

//функция показа ответа компьютера
function showAnswer(){
        button[computerRespons].classList.add('active__computer');
};

//Функция изменения фоновой картинки ????????????
function nextImg(img){
        document.body.style.background = 'url(../img_test' + imgs[img] + '):';
};

//показать вопросы и варианты ответов
show(level);

document.getElementById('option1').onclick = function() { //по клику
        this.classList.add('active__user');//поменять цвет нажатой кнопки    
        userResponse = this.value;//записать в переменную выбранный пользователем ответ
        computerRespons = getRandomInt(0,4);//записать в переменную ответ компьютера
        setTimeout(expectations, 700, "b-popup-expectation", "block");//показ сообщения ожидания
        setTimeout(expectations, 3000, "b-popup-expectation", "none");//скрыть сообщение ожидания 
        setTimeout(showAnswer, 3700);//покозать выбронный ответ компьютера
        setTimeout(expectations, 4000, "b-popup-answer", "block");//показать правильный ответ
};

document.getElementById('option2').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

document.getElementById('option3').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

document.getElementById('option4').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

close.onclick = function() { //при клики 
        bPopupAnswer.style.display = 'none'; //закрываем табличку с ответом

        if (userResponse == answers[level]) {//если ответ пользователя правильный
                userScore = userScore + 1; //прибавляем счет
                document.getElementById('userScore').innerHTML = userScore;//выводим счет
        }
        
        if (computerRespons == answers[level]) {// ответ компьютера правильный
                computerScore = computerScore +1;// прибавляем счет
                document.getElementById('computerScore').innerHTML = computerScore;//выаодим счет
        };
        
        level = level + 1;// следующий этап

        if(userScore == 5) {//если счет пользователя равен 5ти 
                setTimeout(expectations, 700, "b-popup-win", "block");//выводим табличку с выигрышом
        };

        if(computerScore == 5) {//если счет компьютера равен 5ти 
                setTimeout(expectations, 700, "b-popup-lost", "block");//выводим табличку с проинрышом
        };

        button.forEach(function(item){//убираем классы active 
                item.classList.remove('active__user');
                item.classList.remove('active__computer');
        });
        
        nextImg(level);//изменение фоновой картинки ?????????????

        show(level);//выводим новый вопрос с вариантами ответов
};



};

        
