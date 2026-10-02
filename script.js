const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

let noSize = 1;

noButton.addEventListener("click", function () {
    noSize -= 0.2;

    if (noSize > 0) {
        noButton.style.transform = `scale(${noSize})`;
    } else {
        noButton.style.display = "none";
    }

    message.textContent = "Хмм... попробуй ещё раз 😏";
});

yesButton.addEventListener("click", function () {

    document.body.innerHTML = `
        <div class="final-message">
            Я ТАК И ЗНАЛ! 😎<br>
            ТЫ СЧИТАЕШЬ МЕНЯ КЛАССНЫМ,<br>
            ХОМЯЧОК! 🐹❤️
        </div>
    `;

});