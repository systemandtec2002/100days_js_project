const notesContainer = document.querySelector('.notes-container');

const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()


function upadateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = "input-box";               
  inputBox.setAttribute("contenteditable", "true");
  img.src= "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);

    
  


})

notesContainer.addEventListener("click", (e) =>{
if(e.target.tagName === "IMG"){
  e.target.parentElement.remove();
  upadateStorage();
} else if (e.target === "p"){
notes = document.querySelectorAll(".inputBox");
notes.forEach(nt  => {
  nt.onkeyup = function(){
    upadateStorage();
  }
})
}
})


document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})