const checkbox = document.getElementById("checkbox");
const label_text = document.getElementById("label_text");

function checkboxInputListener(event) {
    console.log(event)
    const checked = event.target.checked
    label_text.innerText = checked
}


checkbox.addEventListener("input", checkboxInputListener)