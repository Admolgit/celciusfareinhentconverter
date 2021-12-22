let form1 = document.querySelector('.celcius-form');

form1.addEventListener('submit', celciusToFahrenheit);

function celciusToFahrenheit(e) {
  console.log(123);
  e.preventDefault();
  
  

  const celciusInput = document.querySelector('.celcius-input');
  
  if(celciusInput.value !== '') {

    let n = celciusInput.value;

    const results = document.querySelector('.results');

    results.innerText = Math.floor(n * 1.8 + 32).toFixed(2);
  }
}


