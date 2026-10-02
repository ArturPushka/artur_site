const card = document.querySelector(".card");


// ============================
// ВОПРОС 1
// ============================

function questionOne() {

    card.innerHTML = `
        <h1>Как ты думаешь...</h1>
        <h2>Артур классный? 😎</h2>

        <div class="buttons">
            <button id="yes">Да ❤️</button>
            <button id="no">Нет</button>
        </div>
    `;

    document.getElementById("yes").onclick = function () {
        card.innerHTML = `
            <h1>Ну так надо было сразу нажимать «Да» 😎</h1>
            <p>А чё думать-то? 😂</p>

            <button id="next">Следующий вопрос ➡️</button>
        `;

        document.getElementById("next").onclick = questionTwo;
    };


    document.getElementById("no").onclick = function () {

        card.innerHTML = `
            <h1>НАЧЕСЕ, ТЫ ЧЁ, ОФИГЕЛА? 💀</h1>

            <button id="again">
                Давай попробуем ещё раз
            </button>
        `;

        document.getElementById("again").onclick = questionOne;
    };
}


// ============================
// ВТОРОЙ ОТВЕТ «НЕТ»
// ============================

function questionOneAgain() {

    card.innerHTML = `
        <h1>Я спрашиваю, не офигела ли ты? 😭</h1>

        <button id="again">
            Попробовать ещё раз
        </button>
    `;

    document.getElementById("again").onclick = function () {

        card.innerHTML = `
            <h1>Артур классный? 😎</h1>

            <div class="buttons">
                <button id="onlyYes">Да ❤️</button>
            </div>
        `;

        document.getElementById("onlyYes").onclick = function () {

            card.innerHTML = `
                <h1>Ну так надо было сразу нажимать «Да» 😭</h1>
                <p>А чё думать-то? 😂</p>

                <button id="next">Следующий вопрос ➡️</button>
            `;

            document.getElementById("next").onclick = questionTwo;
        };
    };
}


// ============================
// ВОПРОС 2
// ============================

function questionTwo() {

    card.innerHTML = `
        <h1>Хочешь увидеть во сне меня? 🌙</h1>

        <div class="buttons">
            <button id="yes">Да ❤️</button>
            <button id="no">Нет</button>
        </div>
    `;


    document.getElementById("yes").onclick = function () {

        card.innerHTML = `
            <h1>Я ТАК И ЗНАЛ 😎❤️</h1>

            <p>
                Что ты хочешь увидеть меня во сне,
                хомячок 🐹
            </p>

            <button id="next">
                Следующий вопрос ➡️
            </button>
        `;

        document.getElementById("next").onclick = questionThree;
    };


    document.getElementById("no").onclick = function () {

        card.innerHTML = `
            <h1>Неправильно ❌</h1>
            <p>Подумай ещё раз 😭</p>

            <button id="again">
                Ответить заново
            </button>
        `;

        document.getElementById("again").onclick = function () {

            card.innerHTML = `
                <h1>Не, ну ты точно офигела 💀</h1>

                <button id="again2">
                    Попробовать ещё раз
                </button>
            `;

            document.getElementById("again2").onclick = function () {

                card.innerHTML = `
                    <h1>Хочешь увидеть во сне меня? 🌙</h1>

                    <div class="buttons">
                        <button id="onlyYes">
                            Да ❤️
                        </button>
                    </div>
                `;

                document.getElementById("onlyYes").onclick = function () {

                    card.innerHTML = `
                        <h1>Я ТАК И ЗНАЛ 😎❤️</h1>

                        <p>
                            Что ты хочешь увидеть меня во сне,
                            хомячок 🐹
                        </p>

                        <button id="next">
                            Следующий вопрос ➡️
                        </button>
                    `;

                    document.getElementById("next").onclick = questionThree;
                };
            };
        };
    };
}


// ============================
// ВОПРОС 3
// ============================

function questionThree() {

    card.innerHTML = `
        <h1>Какая у тебя мечта? ✨</h1>

        <input
            id="dream"
            type="text"
            placeholder="Напиши свою мечту..."
        >

        <br><br>

        <button id="answer">
            Ответить ✍️
        </button>
    `;


    document.getElementById("answer").onclick = function () {

        const dream = document.getElementById("dream").value.trim();

        if (dream === "") {
            alert("Эй, ты ничего не написала 😭");
            return;
        }

        card.innerHTML = `
            <h1>Неправильно ❌</h1>

            <p>
                Ответьте ещё раз 😭
            </p>

            <button id="again">
                Ответить ещё раз
            </button>
        `;


        document.getElementById("again").onclick = function () {

            card.innerHTML = `
                <h1>Какая у тебя мечта? ✨</h1>

                <button id="dreamAnswer">
                    Увидеть во сне Артура 🐹🌙
                </button>
            `;


            document.getElementById("dreamAnswer").onclick = function () {

                card.innerHTML = `
                    <h1>Я уважаю твой вкус 😎</h1>

                    <p>
                        И твой выбор, хомячок 🐹❤️
                    </p>
                `;
            };
        };
    };
}


// ============================
// ЗАПУСК
// ============================

questionOne();
