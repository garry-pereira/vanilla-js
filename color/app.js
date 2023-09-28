const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'pink']

const btn = document.getElementById('btn')
const page = document.getElementById('h4')
const color = document.querySelector('span')

btn.addEventListener('click', () => {
	const getRanHex = size => {
		let result = ['#'];
		const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

		for (let n = 0; n < size; n++) {
			result.push(hexRef[Math.floor(Math.random() * 16)]);
		}
		return result.join('');
	}
	const body = document.querySelector('body')
	const currentColor = body.style.background
	if (page == 'color flipper') {
		const newColors = colors.filter(color => color != currentColor)
		const newModeNumber = Math.floor(Math.random()*4)
		body.style.background = newColors[newModeNumber]
		color.innerText = newColors[newModeNumber]
	} else {
		const randomColor = getRanHex(6).toUpperCase()
		body.style.background = randomColor
		color.innerText = randomColor
	}
	}
)
