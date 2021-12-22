const formFah = document.querySelector('.fehrenheit-form');

formFah.addEventListener('submit', fahrenheitToCelsius);

function fahrenheitToCelsius(e) {
  const fahrenheitInput = document.querySelector('.text-input');
  if(fahrenheitInput.value !== '') {
    console.log('welcome...')
    let n = fahrenheitInput.value;
    const result = document.querySelector('.result');

    result.innerText = parseFloat((n - 32) / 1.8).toFixed(2);

  }
  e.preventDefault();
}


