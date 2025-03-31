const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|{}[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random()*upperCase.length)];
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password += number[Math.floor(Math.random()*number.length)];
  password += symbol[Math.floor(Math.random()*symbol.length)];


  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
   passwordBox.value = password;
   
}

async function copyPassword() {
  if (!passwordBox) {
    console.error("Password box element not found.");
    return;
  }
  try {
    await navigator.clipboard.writeText(passwordBox.value);
    alert('Password copied!');
  } catch (err) {
    console.error('Failed to copy: ', err);
    alert('Copy failed, please copy manually');
  }
}

