let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

function setItem(itemText) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`View Order ${itemText}!`);
        item = itemText;
        tg.MainButton.show();
    }
}

function addButtonListener(btn, itemText) {
    btn.addEventListener("click", function(){
        setItem(itemText);
    });
}

let buttons = document.querySelectorAll("[id^='btn']");

buttons.forEach((btn, index) => {
    addButtonListener(btn, index + 1);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
