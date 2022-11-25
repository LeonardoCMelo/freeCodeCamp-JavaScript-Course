var ageInput = window.document.getElementById("age-input");

window.document.getElementById("submit-age").addEventListener('click', submitAge);

function submitAge() {
    if (Number(ageInput.value) < 18) {
        window.document.getElementById("warning").innerText = "You can't play!! Your age is " + ageInput.value
    }
}