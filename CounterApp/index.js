let incrementBtn = document.querySelector('.increment');
let decrementBtn = document.querySelector('.decrement');
const count = document.querySelector(".count");
const changeBy = document.querySelector('#changeBy');
const reset = document.querySelector('.reset'); 


incrementBtn.addEventListener('click', () => {
  const countValue = parseInt(count.innerText);
// console.log(countValue);
const changeByValue = parseInt(changeBy.value);

count.innerText = countValue + changeByValue;
if (parseInt(count.innerText) === 10) {
        let heading = document.createElement('h1');
        heading.innerText = "hey congrats you have change value upto 10";
        document.body.appendChild(heading);
      }

})

decrementBtn.addEventListener('click', () => {
const countValue = parseInt(count.innerText);
// console.log(countValue);
const changeByValue = parseInt(changeBy.value);

count.innerText = countValue - changeByValue ;



})

reset.addEventListener("click", () => {
  count.innerText = "0";
})




