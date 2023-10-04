const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')

const timerText = document.querySelector('h1')

console.log(timerText)

startBtn.addEventListener('click', () => {
    console.log(startBtn)
    let time = new Date()
    console.log(time.getSeconds(), time.getMinutes())
    setInterval(() => {
        time = new Date()
        timerText.innerText = time.getSeconds()
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    console.log(stopBtn)
})

resetBtn.addEventListener('click', () => {
    console.log(resetBtn)
})

