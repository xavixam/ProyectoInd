const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const preguntas = document.getElementById("preguntas");
const respuestas = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");
let api = "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple&encode=url3986"
let contador = 0;  

axios.get(api)

.then((res) => {
    const arrayPreguntas = res.data.results  

    mostrarPreguntas(arrayPreguntas, contador)  

    function mostrarPreguntas(arrayPreguntas, contador) {
        preguntas.innerText = `${arrayPreguntas[contador].question}`
        respuestas.innerHTML = `<button id="correcta">${arrayPreguntas[contador].correct_answer}</button>
        <button id="incorrecta1">${arrayPreguntas[contador].incorrect_answers[0]}</button>
        <button id="incorrecta2">${arrayPreguntas[contador].incorrect_answers[1]}</button>
        <button id="incorrecta3">${arrayPreguntas[contador].incorrect_answers[2]}</button>`
    }
    
    function limpiar() {
        preguntas.innerText = ``
        respuestas.innerHTML = ``
    }
    
    function siguientePregunta() {
        limpiar()
        contador = contador + 1
        mostrarPreguntas(arrayPreguntas, contador)
    }

    btnSiguiente.addEventListener("click", siguientePregunta)
})
    
.catch((err) => console.error(err))