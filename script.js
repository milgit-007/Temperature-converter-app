const converterValue = document.querySelector('#converter');
const converterBtn = document.querySelector('.converter-btn');
const resetBtn = document.querySelector('.reset-btn');
const changeBtn = document.querySelector('.change-btn');
const resultInfo = document.querySelector('.result');
const spanCelsius = document.querySelector('.one');
const spanFahrenheit = document.querySelector('.two');

const swapUnits = () => {
	if (spanCelsius.textContent === '°C') {
		spanCelsius.textContent = '°F';
		spanFahrenheit.textContent = '°C';
		resultInfo.textContent = '';
		converterValue.value = '';
	} else {
		spanCelsius.textContent = '°C';
		spanFahrenheit.textContent = '°F';
		resultInfo.textContent = '';
		converterValue.value = '';
	}
};

const changeFahrToCel = () => {
	const fahrenheit = (converterValue.value * 1.8 + 32).toFixed(1);
	resultInfo.textContent = `${converterValue.value}°C to ${fahrenheit}°F`;
	resultInfo.style = '';
	converterValue.value = '';
};

const changeCelToFahr = () => {
	const celsius = ((converterValue.value - 32) / 1.8).toFixed(1);
	resultInfo.textContent = `${converterValue.value}°F to ${celsius}°C`;
	resultInfo.style = '';
	converterValue.value = '';
};

const temperatureConversion = () => {
	if (converterValue.value !== '') {
		if (spanCelsius.textContent === '°C') {
			changeFahrToCel();
		} else {
			changeCelToFahr();
		}
	} else {
		resultInfo.textContent = 'Musisz podać jakąś wartość!';
		resultInfo.style.color = 'darkred';
        resultInfo.style.fontSize = '16px'
	}
};

const resetValue = () => {
	converterValue.value = '';
	resultInfo.textContent = '';
};

converterBtn.addEventListener('click', temperatureConversion);
changeBtn.addEventListener('click', swapUnits);
resetBtn.addEventListener('click', resetValue);
converterValue.addEventListener('keydown', () => (resultInfo.textContent = ''));
