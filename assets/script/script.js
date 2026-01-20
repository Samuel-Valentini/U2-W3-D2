console.log("script.js online");

const form = document.getElementById("name-surname");
const phrase = document.getElementById("actualValue");
const name = document.getElementById("name");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
const variableName = "fullname";
const secondsNumber = document.getElementById("seconds-number");
const msBar = document.getElementById("ms");
const sBar = document.getElementById("s");
const mBar = document.getElementById("min");
const hBar = document.getElementById("hours");
const dBar = document.getElementById("days");

const secondsNumberT = document.getElementById("seconds-number-t");
const msBarT = document.getElementById("ms-t");
const sBarT = document.getElementById("s-t");
const mBarT = document.getElementById("min-t");
const hBarT = document.getElementById("hours-t");
const dBarT = document.getElementById("days-t");

const actual = "actualTime";
const start = "start";
let msecondsTimer = 0;
let widthMsBar = 0;
let secondsBar = 0;
let secondsBarUtility = 0;
let minuteBar = 0;
let hoursBar = 0;
let daysBar = 0;

let msecondsTimerT = 0;
let widthMsBarT = 0;
let secondsBarT = 0;
let secondsBarUtilityT = 0;
let minuteBarT = 0;
let hoursBarT = 0;
let daysBarT = 0;

if (localStorage.getItem(variableName)) {
    phrase.textContent = `Attualmente il nome salvato è ${localStorage.getItem(variableName)}`;
}

saveButton.addEventListener("click", () => {
    if (name.value !== "") {
        localStorage.setItem(variableName, name.value);
        phrase.textContent = `Attualmente il nome salvato è ${localStorage.getItem(variableName)}`;
    }
});

deleteButton.addEventListener("click", () => {
    localStorage.removeItem(variableName);
    phrase.textContent = "Non ci sono attualmente valori salvati.";
});

clearButton.addEventListener("click", () => {
    name.value = "";
});

if (sessionStorage.getItem(actual)) {
    msecondsTimer = Number(sessionStorage.getItem(actual));
    secondsBar = Number(sessionStorage.getItem(actual));
    widthMsBar = ((Number(sessionStorage.getItem(actual)) * 1000) % 1000) / 10;
    minuteBar = Number(sessionStorage.getItem(actual)) / 60;
    hoursBar = Number(sessionStorage.getItem(actual)) / 60 / 60;
    daysBar = Number(sessionStorage.getItem(actual)) / 60 / 60 / 24;
}

if (!localStorage.getItem(start)) {
    localStorage.setItem(start, Date.now());
} else {
    msecondsTimerT = (Date.now() - Number(localStorage.getItem(start))) / 1000;
    console.log(msecondsTimerT);
    secondsBarT = (Date.now() - Number(localStorage.getItem(start))) / 1000;
    widthMsBarT =
        ((((Date.now() - Number(localStorage.getItem(start))) / 1000) * 1000) %
            1000) /
        10;
    minuteBarT = (Date.now() - Number(localStorage.getItem(start))) / 1000 / 60;
    hoursBarT =
        (Date.now() - Number(localStorage.getItem(start))) / 1000 / 60 / 60;
    daysBarT =
        (Date.now() - Number(localStorage.getItem(start))) /
        1000 /
        60 /
        60 /
        24;
}

setInterval(() => {
    msecondsTimer += 25 / 1000;
    secondsNumber.textContent = (Math.round(msecondsTimer * 10) / 10).toFixed(
        1,
    );

    msecondsTimerT += 25 / 1000;
    secondsNumberT.textContent = (Math.round(msecondsTimerT * 10) / 10).toFixed(
        1,
    );

    sessionStorage.setItem(actual, msecondsTimer);

    widthMsBar += 2.5;

    if (widthMsBar >= 100) {
        widthMsBar = widthMsBar % 100;
    }

    secondsBar += 1 / 40;

    if (secondsBar >= 60) {
        secondsBar = secondsBar % 60;
    }

    minuteBar = msecondsTimer / 60;

    if (minuteBar >= 60) {
        minuteBar = minuteBar % 60;
    }

    hoursBar = msecondsTimer / 60 / 60;

    if (hoursBar >= 24) {
        hoursBar = hoursBar % 24;
    }

    daysBar = msecondsTimer / 60 / 60 / 24;

    msBar.style.width = widthMsBar + "%";
    sBar.style.width = (secondsBar / 60) * 100 + "%";
    mBar.style.width = (minuteBar / 60) * 100 + "%";
    hBar.style.width = (hoursBar / 24) * 100 + "%";
    dBar.style.width = (daysBar / 365) * 100 + "%";

    widthMsBarT += 2.5;

    if (widthMsBarT >= 100) {
        widthMsBarT = widthMsBarT % 100;
    }

    secondsBarT += 1 / 40;

    if (secondsBarT >= 60) {
        secondsBarT = secondsBarT % 60;
    }

    minuteBarT = msecondsTimerT / 60;

    if (minuteBarT >= 60) {
        minuteBarT = minuteBarT % 60;
    }

    hoursBarT = msecondsTimerT / 60 / 60;

    if (hoursBarT >= 24) {
        hoursBarT = hoursBarT % 24;
    }

    daysBarT = msecondsTimerT / 60 / 60 / 24;

    msBarT.style.width = widthMsBarT + "%";
    sBarT.style.width = (secondsBarT / 60) * 100 + "%";
    mBarT.style.width = (minuteBarT / 60) * 100 + "%";
    hBarT.style.width = (hoursBarT / 24) * 100 + "%";
    dBarT.style.width = (daysBarT / 365) * 100 + "%";
}, 25);
