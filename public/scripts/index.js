const inputs = document.querySelectorAll(".input");

function focusHandler() {
    const parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function blurHandler() {
    const parent = this.parentNode.parentNode;
    this.value === "" && parent.classList.remove("focus");
}

inputs.forEach(input => {
    input.addEventListener("focus", focusHandler);
    input.addEventListener("blur", blurHandler);
})