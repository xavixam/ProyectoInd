const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const container = document.querySelector(".container")
const preguntas = document.getElementById("preguntas");
const respuestas = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");
const fin = document.getElementById("fin");
let api = "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple&encode=url3986"
let contador = 0;
let resultado = 0;
let arrayPreguntas = []

axios.get(api)

    .then((res) => {
        arrayPreguntas = res.data.results
        empezar()
    })

    .catch((err) => console.error(err))

function siguientePregunta() {
    limpiar()

    if (contador < arrayPreguntas.length) {
        mostrarPreguntas()
    } else {
        limpiar()
        mostrarFinal()
    }
}

function empezar() {
    mostrarPreguntas()
    siguientePregunta()
}

function mostrarPreguntas() {

    preguntas.innerText = `${unescape(arrayPreguntas[contador].question)}`
    respuestas.innerHTML = `<button id="correcta" class="btn btn-primary d-inline-flex align-items-center">${unescape(arrayPreguntas[contador].correct_answer)}</button>
    <button class="btn btn-primary d-inline-flex align-items-center incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[0])}</button>
    <button class="btn btn-primary d-inline-flex align-items-center incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[1])}</button>
    <button class="btn btn-primary d-inline-flex align-items-center incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[2])}</button>`

    const correcta = document.querySelector("#correcta")
    const incorrectas = document.querySelectorAll(".incorrecta")

    elegirCorrecta(correcta)

    incorrectas.forEach(element => {
        elegirIncorrecta(element)
    });
}

function elegirCorrecta(correcta) {
    correcta.addEventListener("click", (e) => {
        e.preventDefault()
        correcta.classList.add("correcta")
        setTimeout(() => {
            sumarContador()
            sumarResultado()
            siguientePregunta()
        }, 2000);
    })
}

function elegirIncorrecta(element) {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        element.classList.add("incorrectas")
        setTimeout(() => {
            sumarContador()
            siguientePregunta()
        }, 2000);
    })
}

function sumarContador() {
    contador = contador + 1
}

function sumarResultado() {
    resultado = resultado + 1
}

function limpiar() {
    preguntas.innerText = ``
    respuestas.innerHTML = ``
}

function mostrarFinal() {
    container.classList.add("hide");
    fin.innerHTML = `<div class="container"><h2>Resultado final: ${resultado}/5</h2></div>`
}