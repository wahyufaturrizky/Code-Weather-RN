// function that transforms epoch to hh:mm

export function convertTime(number) {
	let hours = ('0' + number.getHours()).substr(-2);
	let minutes = ('0' + number.getMinutes()).substr(-2);
	return hours + ':' + minutes;
}

export function getWeekDay(number) {
	let weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let dayOfWeek = weekDays[new Date(number * 1000).getDay()];

	return dayOfWeek;
}

export function roundRainPercentage(number) {
	let percentage = Math.round(number * 100);
	let roundToTen = Math.round(percentage / 10) * 10;
	return roundToTen;
}

export function degToCard(value) {
	value = parseFloat(value);
	if (value <= 11.25) return 'N';
	value -= 11.25;
	var allDirections = [
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
		'N',
	];
	var dIndex = parseInt(value / 22.5);
	return allDirections[dIndex] ? allDirections[dIndex] : 'N';
}
