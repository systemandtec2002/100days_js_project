

let vowels = ['a', 'e', 'i', 'o', 'u'];
let button = document.getElementById('btn');
let result = document.getElementById('result');

let counter = 0

button.addEventListener('click', countVowels)

function countVowels(){
    let word = document.getElementById('input').value;
    let counter = 0; // Reset counter for each click
    let lowerCaseWord = word.toLowerCase(); // Convert the entire word to lowercase once

    for(let w of lowerCaseWord){
        for(let v of vowels){
            if(w == v){
                counter++;
            }
        }
    }

    result.innerText = ` "${word}" has ${counter} vowels `;
}