
window.onload = function() {

        //массив с вопросами
        let questions = ["Каких трёх четвероногих существ изобразил Карл Брюллов на картине «Всадница»?",
        "О какой картине К. Брюллова Вальтер Скотт восхищённо сказал: «Это не картина, это целая поэма»?",
        "Назовите основоположника импрессионизма",
        "Какой российский художник изобразил Федора Шаляпина в роскошной шубе?",
        "Каким знаменитым художником была создана самая крупная роспись Исааки-евского собора в Санкт-Петербурге - огромный плафон большого купола площадью более 800 кв. м?",
        "Назовите имя и фамилию русского художника — автора картины «Богатыри».",
        "Кому пишут письмо запорожцы на картине Ильи Ефимовича Репина?",
        "Кто написал замечательную картину «Московский дворик»?",
        "Назовите самую большую картину в Третьяковской галерее",
        "Как называется произведение искусства из трех картин, объединенных общей идеей или темой?",
        "Как называется хранилище картин?"
        ];
        //массив с вариантами
        let options = ["Вороного коня и двух собак", "Вороного коня и трех собак", "Вороного коня без собак", "Собак без коня",
                "«Бурлаки на Волге»", "«Последние деньги пропей»", "«Садко»", "«Последний день Помпеи»",
                "Тороп Ян", "Греко Эль","Ге Николай", "Эдуард Мане",
                "Пимоненко Николай", "Борис Кустодиев", "Анненков Юрий", "Соломко Сергей",
                "Карлом Брюлловым", "Васнецовым Виктором", "Верещагиным Василием", "Айвазовским Иваном",
                "Новоскольцев Александр", "Виктор Васнецов", "Тропинин Василий", "Маковский Константин",
                "Американскому призеденту", "Русскому князю", "Турецкому султану", "Королеве Великобритании",
                "Брюллов Карл", "Харламов Алексей", "Василий Поленов", "Макаров Иван",
                "«Явление Христа народу»", "«Девочка с гусями»", "«Апофеоз войны»", "«Завтрак аристократа»",
                "Липтих", "Триптих", "Апчих", "Нафлудин",
                "Пинакотека", "Ипотека", "Аптека", "Наркотека",

        ];
        //массив с правильными ответами
        let answers = ["Вороного коня и двух собак", "«Последний день Помпеи»", "Эдуард Мане",
                "Борис Кустодиев", "Карлом Брюлловым", "Виктор Васнецов", "Турецкому султану", 
                "Василий Поленов", "«Явление Христа народу»", "Триптих", "Пинакотека", ];
        //массив с кнопками в которых правильный ответ
        let answersButton = ["0","3","3","1","0","1","2","2","0","1", "0",];
        //массив с интересными фактами
        let interestingFacts = ["«Всадница» Брюллова оказалась одной из первых картин в русской живописи, объединивших совершенно разные жанры: пафосный парадный портрет и обычную бытовую сцену. Традиционно на лошади в XIX веке было принято изображать властвовавших особ, а Брюллов нарисовал хрупкую девушку, чем удивил не только простых зрителей, но даже других художников",
                "Заказчиком и спонсором написания работы был знаменитый меценат Анатолий Демидов, который затем подарил картину Николаю I. Некоторое время она выставлялась как руководство для начинающих живописцев в Академии художеств.",
                "За год до смерти Эдуард Мане удостоился ордена Почетного легиона, высшей гражданской награды Франции. А после смерти его провозгласили основателем импрессионизма",
                "Зрительная память Кустодиева была уникальной и позволяла ему с легкостью вспомнить и нарисовать то, что он видел много лет назад",
                "Художник любил работать под чтение в слух",
                "Картину “Богатыри” Виктор Васнецов задумал задолго до того, как создал это знаменитое полотно. Но идея крепко засела в его голове, и однажды он к ней вернулся. Работа над картиной заняла у него около 20 лет, он то останавливал её, то возвращался к ней",
                "За годы учёбы в Академии художеств Илья Репин получил серебряную медаль и две золотых, малую и большую",
                "Первым своим учителем живописи Василий Поленов считал матушку Марию Алексеевну",
                "В погоне за идеалом художник создал шестьсот набросков",
                "Форма триптиха пришла из раннего христианского искусства и в Средние века была популярным форматом для создания картин, вешаемых у алтаря.",
                "Так называлось левое крыло пропилей афинского Акрополя, где находилось собрание картин, принесённых в дар богине Афине",];
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
//Функция записи правильного ответа в popup
function answerText(stage){
        document.getElementById('popupAnswer').innerText = answers[stage];
};
//Функция записи интересного факта в popup
function factsShow(stage) {
        document.getElementById('fact').innerText = interestingFacts[stage];
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
        answerText(level);//записать правильный ответ в popup-answer
        factsShow(level);//Запись интересного факта в popup-answer
        setTimeout(expectations, 4000, "b-popup-answer", "block");//показать правильный ответ
};

document.getElementById('option2').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        answerText(level);
        factsShow(level);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

document.getElementById('option3').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        answerText(level);
        factsShow(level);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

document.getElementById('option4').onclick = function() {
        this.classList.add('active__user');
        userResponse = this.value;
        computerRespons = getRandomInt(0,4);
        setTimeout(expectations, 700, "b-popup-expectation", "block");
        setTimeout(expectations, 3000, "b-popup-expectation", "none");
        setTimeout(showAnswer, 3700);
        answerText(level);
        factsShow(level);
        setTimeout(expectations, 4000, "b-popup-answer", "block");
};

close.onclick = function() { //при клики 
        bPopupAnswer.style.display = 'none'; //закрываем табличку с ответом

        if (userResponse == answersButton[level]) {//если ответ пользователя правильный
                userScore = userScore + 1; //прибавляем счет
                document.getElementById('userScore').innerHTML = userScore;//выводим счет
        }
        
        if (computerRespons == answersButton[level]) {// ответ компьютера правильный
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

        
