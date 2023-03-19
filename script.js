const converterInput = document.querySelector('#converter');
const converterBtn = document.querySelector('.converter-btn');
const resetBtn = document.querySelector('.reset-btn');
const swapBtn = document.querySelector('.change-btn');
const resultInfo = document.querySelector('.result');
const errorInfo = document.querySelector('.error-message');
const spanFirst = document.querySelector('.one');
const spanSecond = document.querySelector('.two');
const unitCelsius = '°C';
const unitFahrenheit = '°F';

const swapUnits = () => {
	if (spanFirst.textContent === unitCelsius) {
		spanFirst.textContent = unitFahrenheit;
		spanSecond.textContent = unitCelsius;
		resultInfo.textContent = '';
		converterInput.value = '';
	} else {
		spanFirst.textContent = unitCelsius;
		spanSecond.textContent = unitFahrenheit;
		resultInfo.textContent = '';
		converterInput.value = '';
	}
};

const convertCelsiusToFahrenheit = () => {
	const fahrenheit = (converterInput.value * 1.8 + 32).toFixed(1);
	resultInfo.textContent = `${converterInput.value}${unitCelsius} to ${fahrenheit}${unitFahrenheit}`;
	converterInput.value = '';
	errorInfo.style.display = 'none';
};

const convertFahrenheitToCelsius = () => {
	const celsius = ((converterInput.value - 32) / 1.8).toFixed(1);
	resultInfo.textContent = `${converterInput.value}${unitFahrenheit} to ${celsius}${unitCelsius}`;
	converterInput.value = '';
	errorInfo.style.display = 'none';
};

const convertTemperature = () => {
	if (converterInput.value !== '') {
		if (spanFirst.textContent === unitCelsius) {
			convertCelsiusToFahrenheit();
		} else {
			convertFahrenheitToCelsius();
		}
	} else {
		resultInfo.textContent = '';
		errorInfo.style.display = 'block';
	}
};

const resetValues = () => {
	converterInput.value = '';
	resultInfo.textContent = '';
	errorInfo.style.display = 'none';
};

const useEnterKey = e => {
	if (e.key === 'Enter') {
		convertTemperature();
	}
};


converterBtn.addEventListener('click', convertTemperature);
swapBtn.addEventListener('click', swapUnits);
resetBtn.addEventListener('click', resetValues);
converterInput.addEventListener('keydown', () => (resultInfo.textContent = ''));
converterInput.addEventListener('keyup', useEnterKey);
