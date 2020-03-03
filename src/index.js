const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'sssss': ' '
};

function decode(expr) {
	const decodeMap = {
		'00': '',
		'10': '.',
		'11': '-',
		'**': 's'
	}

	const letterAmount = expr.length / 10
	expr = expr.split('')
	let result = []
	let currentMorse;
	for (let i = 0; i < letterAmount; i++) {
		let currentLetter = []
		for (let j = 0; j < 5; j++) {
			currentMorse = expr.splice(0, 2).join('')
			currentLetter.push(decodeMap[currentMorse])
		}
		result += MORSE_TABLE[currentLetter.join('')]
	}
	return result
}

module.exports = {
	decode
}