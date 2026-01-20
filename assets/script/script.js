console.log("script.js online");

const form = document.getElementById("name-surname");
const phrase = document.getElementById("actualValue");
const name = document.getElementById("name");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
const variableName = "fullname";

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
