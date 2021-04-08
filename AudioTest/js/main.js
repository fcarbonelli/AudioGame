var correcta;
var i;
var notas = ["DO","DO#","RE","RE#","MI","FA","FA#","SOL","SOL#","LA","LA#","SI"];

function startGame()
{
    deployButtons();
    generateGame();

}

function generateGame(){

    correcta = getRandomInt(0,notas.length);
    notas = shuffle(notas);
   
    console.log(notas[correcta]);
    
    let cantNotas = getRandomInt(5,12);
    var arrayAux = [];
    for (i = 0; i < cantNotas; i++) 
    {    
        arrayAux.push(notas[i]);  
    }

    console.log(arrayAux);

    if (arrayAux.includes(notas[correcta]) == false) 
    {
        arrayAux.push(notas[correcta])
    }

    arrayAux = shuffle(arrayAux);

    for (i = 0; i < cantNotas; i++) 
    {    
        crearButton(arrayAux[i]);
    }
}

function crearButton(i){

    //creo el elemento boton
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary btn-lg");
    button.setAttribute("type","button");
    button.setAttribute("id","btnNota");
    button.innerHTML = i;
    button.addEventListener("click", checkCorrectSound);

    //encuentro el div por id
    var botonera = document.getElementById("botones");   
    botonera.appendChild(button);
}

function removeButton(){
    var botonera = document.getElementById("botones");   
    while (botonera.firstChild) {
        botonera.removeChild(botonera.lastChild);
    }
}

function deployButtons(){
    document.getElementById("startButton").disabled = true;

    var NoteButton = document.createElement("button");
    NoteButton.setAttribute("class", "btn btn-warning btn-lg");
    NoteButton.setAttribute("type","button");
    NoteButton.setAttribute("id","divNote");
    NoteButton.innerHTML = "Play Note";
    NoteButton.addEventListener("click", playSound);

    var noteDiv = document.getElementById("divNote");   
    noteDiv.appendChild(NoteButton);
}

function playSound(){

}

function checkCorrectSound(){

    if(this.innerHTML === notas[correcta])
    {
        removeButton();
        generateGame();
    }
    
}

//random int min incluido max excluido
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

