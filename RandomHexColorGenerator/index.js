const colors = document.querySelectorAll('.color-box h2');
const button = document.querySelector('#btn');




button.addEventListener("click",() =>{
  colors.forEach((color) => {
    let hexCode ='#' + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexCode;
    color.innerHTML = hexCode;
  });
})



