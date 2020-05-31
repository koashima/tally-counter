

let counter = document.querySelector('.counter');

let input = document.querySelector('.input');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');


plus.addEventListener('click', plusCounter);
minus.addEventListener('click', minusCounter);


function plusCounter() {

}
function minusCounter() {
  console.log('hello')
}

let init = () => {
  input.value = 1
}



init()