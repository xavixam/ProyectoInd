const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const preguntas = document.getElementById("preguntas");
const respuestas = document.getElementById("respuestas");
const btnSiguiente = document.getElementById("siguiente");
let api = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean&encode=url3986"

axios.get(api)

.then((res) => {
    const arrayPreguntas = res.data.results

    for (const element of arrayPreguntas) {

        preguntas.innerText = `${element.question}`

    }
})
    
.catch((err) => console.error(err))

function empezar() {
    let contadorPregunta = 0;
    proximaPregunta();
}

function proximaPregunta() {
    limpiar()
    mostrarPreguntas(preguntas[contadorPregunta]);
}

function mostrarPreguntas(pregunta) {

    questionElement.innerText = question.question;

    question.answers.forEach((respuesta) => {
        
      const btn = document.createElement("button");
      btn.innerText = respuesta.text;
  
      if (respuesta.correct) {
        btn.dataset.correct = true;
      }
  
      answerButtonsElement.appendChild(btn);
    });

}

function mostrarPreguntas(pregunta) {
    preguntaElement.innerText = pregunta.pregunta;
}
    
function limpiar() {
    respuestas.innerHTML = "";
}