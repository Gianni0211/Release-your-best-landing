let form = document.querySelector('.counter-question');
let input = document.querySelector('#question');
let days = document.querySelector('.days');
let btn = document.querySelector("#btn");
let result = document.querySelector('#counter-result');

form.addEventListener('submit', (el) => {
 el.preventDefault();
 let value = input.value;

 days.textContent = daysToDeath(value);
 result.classList.remove('d-none');
 setTimeout(() => {
  result.classList.add("d-none");
 },10000)


})


function daysToDeath(num){
 let daysLeft = 82 - num;
return  Math.round(daysLeft * 365.24);

}

