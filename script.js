let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
const calc = document.querySelector('#submit');
const res = document.querySelector('#res');

calc.addEventListener('click', function(e) {
   e.preventDefault();
});



calc.addEventListener('click', function() {
   pesoNumber();
   alturaNumber();
   getIMC();
   res.innerHTML = `Seu IMC é de ${getIMC()} (${getNivel()})`;
});

function pesoNumber() {
   return peso = Number(peso.value);
};

function alturaNumber() {
   //Converter centímetros para metros.
   return altura = Number(altura.value) / 100; 
};

function getIMC(){
    const IMC = peso / (altura **2);
    return IMC.toFixed(1);
};

function getNivel() {
  const nivel =  getIMC();

   if (nivel <= 18.5) {
      return 'abaixo do peso ideal.';
   } else if (nivel >= 18.6 && nivel <= 24.9) {
      return 'no peso ideal.';
   } else if (nivel >= 25 && nivel <= 29.9) {
      return 'sobrepeso.';
   } else if (nivel >= 30 && nivel <= 34.9) {
      return 'obesidade grau 1';
   } else if (nivel >= 35 && nivel <= 39.9) {
      return 'obesidade grau 2';
   } else if (nivel >= 40) {
      return 'obesidade grau 3';
   };
};