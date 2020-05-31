
let number = 0;  

let counter = document.querySelector('.counter');

let input = document.querySelector('.input');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');


plus.addEventListener('click', plusCounter);
minus.addEventListener('click', minusCounter);



let init = () => {
  input.value = 1;
  render()
}

let render = () => { 
  counter.innerHTML = number
}

function plusCounter() {
  number = number + parseInt(input.value);
  render();
}

function minusCounter() {
  number = number - parseInt(input.value);
  render();
}

init()