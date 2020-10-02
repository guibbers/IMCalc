let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
const calc = document.querySelector('#submit');
const res = document.querySelector('#res');

calc.addEventListener('click', function(e) {
   e.preventDefault();
   getPeso();
   getAltura();
   const imc = getIMC();
   const nivel = getNivel();
   res.innerHTML = `Seu IMC é de ${imc} (${nivel})`;
});

function getPeso() {
   return parseInt(peso.value);

};

function getAltura() {
   //Converter centímetros para metros.
   return parseInt(altura.value) / 100; 
};

function getIMC(){
   const peso = getPeso();
   const altura = getAltura();
   const imc = peso / (altura **2);
   return imc.toFixed(1);
};

function getNivel() {
  const nivel =  getIMC();

   if (nivel <= 18.5) {
      return 'Abaixo do peso ideal.';
   } else if (nivel >= 18.6 && nivel <= 24.9) {
      return 'Peso ideal.';
   } else if (nivel >= 25 && nivel <= 29.9) {
      return 'Sobrepeso.';
   } else if (nivel >= 30 && nivel <= 34.9) {
      return 'Obesidade grau 1';
   } else if (nivel >= 35 && nivel <= 39.9) {
      return 'Obesidade grau 2';
   } else if (nivel >= 40) {
      return 'Obesidade grau 3';
   };
};