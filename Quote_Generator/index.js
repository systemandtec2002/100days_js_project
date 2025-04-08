
// const btnEle = document.getElementById("btn");


//  const apiURL = "https://api.quotable.io/random";
// // const apiURL = "https://zenquotes.io/api/random";


// btnEle.addEventListener("click", async() => {
//   const response = await fetch(apiURL);
//   const data = await response.json();
// console.log(data);

// });



const btnEle = document.getElementById("btn");

// const apiURL = "https://api.quotable.io/random";
// const apiURL = "https://zenquotes.io/api/random";
const apiURL = await fetch("https://type.fit/api/quotes");



btnEle.addEventListener("click", async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


