const countDownElement = document.querySelector(".time")
const eventDateText = "26 Nov 2022"

function setTimeDisplay(timeLeft) {
  countDownElement.textContent = timeLeft
}

function countDown() {
  const eventDate = new Date(eventDateText) // date aceita string com data e retorna mais informação sobre tal
  const currentDate = new Date()

  const totalSeconds = (eventDate - currentDate) / 1000 // eventDate - currentDate = diferença em milisegundos
  console.log(totalSeconds)

  const minutes = formatTime(Math.floor(totalSeconds / 60) % 60)
  const hours = formatTime(Math.floor(totalSeconds / 3600) % 60)
  const days = formatTime(Math.floor(totalSeconds / 3600 / 24))
  const seconds = formatTime(Math.floor(totalSeconds) % 60)

  setTimeDisplay(`${days} : ${hours} : ${minutes} : ${seconds}`)
}

function formatTime(time) {
  console.log(time < 10 ? "0" + time : time)
  return time < 10 ? "0" + time : time
}

function updateCountDown() {
  setInterval(() => {
    countDown()
  }, 1000)
}

updateCountDown()
