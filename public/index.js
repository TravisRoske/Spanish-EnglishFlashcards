"use strict"

import translate from './translate.js'


let list = [
    "fifty",
    "fifteen",
    "five-hundred",
    "shoe",
    // "car",
    // "rock",
    // "man",
    // "woman",
    // "store",
    // "happy",
    // "funny",
    // "run",
    // "building",
    // "highway",
    // "road"
]

let counter = -1;
let englishState = false;


const englishWord = document.getElementById("englishWord")
const spanishWord = document.getElementById("spanishWord")
englishWord.innerText = "Click To Begin"

const flipp = document.getElementById("flip-card-inner")

flipp.addEventListener("click", (async () => {
    if(englishState){
        englishState = false;
        let spanish = await translate(list[counter]);
        console.log("returned", spanish)

        //play flip animation
        flipp.style.transform = "rotateY(180deg)";

        spanishWord.innerText = ''
        for(let word of spanish){
            spanishWord.append(word)
            spanishWord.append(`\n`)
        }
    } else {
        englishState = true;
        //flip animation
        flipp.style.transform = "rotateY(0deg)";

        counter++;
        counter %= list.length;
        englishWord.innerText = list[counter]
    }
}))





const addNewWordForm = document.getElementById("addNewWordForm")
addNewWordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addWordToList();
}, false )

function addWordToList(){
    const newWordTextBox = document.getElementById("newWordTextBox")
    const newWord = newWordTextBox.value;
    newWordTextBox.value = ''

    list.push(newWord);
    console.log(list);
}