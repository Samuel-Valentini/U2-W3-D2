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

const actual = "actualTime";
let msecondsTimer = 0;

let widthMsBar = 0;
let secondsBar = 0;
let secondsBarUtility = 0;
let minuteBar = 0;
let hoursBar = 0;
let daysBar = 0;

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
    widthMsBar = Number(sessionStorage.getItem(actual)) / 100;
    minuteBar = Number(sessionStorage.getItem(actual)) / 60;
    hoursBar = Number(sessionStorage.getItem(actual)) / 60 / 60;
    daysBar = Number(sessionStorage.getItem(actual)) / 60 / 60 / 24;
}

setInterval(() => {
    msecondsTimer += 25 / 1000;
    secondsNumber.textContent = (Math.round(msecondsTimer * 10) / 10).toFixed(
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
}, 25);
