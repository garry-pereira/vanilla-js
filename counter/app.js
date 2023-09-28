const decButton = document.querySelector('.decrease')
const incButton = document.querySelector('.increase')
const resetButton = document.querySelector('.reset')
const display = document.getElementById('value')
let displayNum = parseInt(display.innerText)

const colorCheck = (num) => {
	if (num > 0) {
		return 'green'
	} else if (num < 0) {
		return 'red'
	} else {
		return 'black'
	}
}

decButton.addEventListener('click', () => {
	console.log(displayNum)
	displayNum--
	display.innerText = displayNum.toString()
	display.style.color = colorCheck(displayNum)
})

incButton.addEventListener('click', () => {
	displayNum++
	display.innerText = displayNum.toString()
	display.style.color = colorCheck(displayNum)
})

resetButton.addEventListener('click', () => {
	displayNum = 0
	display.innerText = displayNum.toString()
	display.style.color = colorCheck(displayNum)
})
