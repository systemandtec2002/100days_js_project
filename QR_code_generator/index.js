let imgBox = document.getElementById("imgBox");

let qrImage = document.getElementById("qrImage");

let qrText = document.getElementById('qrText');

let btnEle = document.getElementById('btn')
;


btnEle.addEventListener("click", () => {
  if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    imgBox.classList.add("show-img");
  } else{
qrText.classList.remove('error')
setTimeout(() =>{

},1000)
  }
  



})

