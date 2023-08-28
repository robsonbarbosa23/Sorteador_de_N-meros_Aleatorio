const buttonSortear = document.querySelector(".button-sortear")


function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const drawnNumber = document.querySelector("#drawn-number")

    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo!")
    } else {
        drawnNumber.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min
    }
}

buttonSortear.addEventListener("click", generateNumber)