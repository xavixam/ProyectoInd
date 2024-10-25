const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const preguntas = document.getElementById("preguntas");
const respuestas = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");
let api = "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple&encode=url3986"

axios.get(api)

.then((res) => {
    const arrayPreguntas = res.data.results  
    let contador = 0;  

    preguntas.innerText = `${arrayPreguntas[contador].question}`
    respuestas.innerHTML = `<button id="correcta">${arrayPreguntas[contador].correct_answer}</button> <button id="incorrecta">${arrayPreguntas[contador].incorrect_answers}</button>`        

})
    
.catch((err) => console.error(err))

btnSiguiente.addEventListener("click", siguientePregunta)

function limpiar() {
    
    preguntas.innerText = ``
    respuestas.innerHTML = ``        
    contador + 1
}

function siguientePregunta() {
    limpiar()
}