const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const preguntas = document.getElementById("preguntas");
const respuestas = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");
const fin = document.getElementById("fin");
let api = "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple&encode=url3986"
let contador = 0;  
let resultado = 0;

axios.get(api)

.then((res) => {
    empezar(res)
})
    
.catch((err) => console.error(err))

function empezar(res) {
    const arrayPreguntas = res.data.results  

    mostrarPreguntas(arrayPreguntas, contador)  
    
    function siguientePregunta() {
        limpiar()    
        contador = contador + 1

        if (contador < arrayPreguntas.length) {

            mostrarPreguntas(arrayPreguntas, contador)

        } else {

            limpiar()
            mostrarFinal()

        }
    }

    btnSiguiente.addEventListener("click", siguientePregunta)
}

function mostrarPreguntas(arrayPreguntas, contador) {
    preguntas.innerText = `${unescape(arrayPreguntas[contador].question)}`
    respuestas.innerHTML = `<button id="correcta">${unescape(arrayPreguntas[contador].correct_answer)}</button>
    <button class="incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[0])}</button>
    <button class="incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[1])}</button>
    <button class="incorrecta">${unescape(arrayPreguntas[contador].incorrect_answers[2])}</button>`

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
        resultado = resultado + 1
    })
}

function elegirIncorrecta(element) {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        element.classList.add("incorrectas")
    })
}

function limpiar() {
    preguntas.innerText = ``
    respuestas.innerHTML = ``
}

function mostrarFinal() {
    contenedorPreguntas.classList.add("hide");
    fin.innerHTML = `<h2>Resultado final: ${resultado}/5</h2>`
}