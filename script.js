const nick = document.querySelector('#nick')
const message = document.querySelector('#message')
const intervalo = document.querySelector('#intervalo')
const advice = document.querySelector('#advice')
const chances = document.querySelector('#chances')
const guess = document.querySelector('#guess')

let GuessNumber
let chancesNumber = 2

const resetGame = () => {
  console.log(GuessNumber)
  if (GuessNumber != undefined) {
    chancesNumber = 2
    chances.textContent = ''
    advice.textContent = ''
    message.textContent = ''
    guess.value = ''
    GuessNumber = undefined
    console.log(GuessNumber)
  }
}

const startGame = () => {
  if (nick.value == '') {
    alert('Por favor, preencha um nome valido')
    throw new Error('Por favor, preencha um nome valido')
  } else {
    message.innerHTML = `Olá <strong>${nick.value}</strong>, vamos jogar!<br/>
    De acordo com a opçao de intervalo que você escolheu, descubra o número.`
  }
  GuessNumber === undefined
    ? (GuessNumber = Math.round(Math.random() * intervalo.value))
    : ''
}

const tryGuess = () => {
  let situation
  // GuessNumber === undefined
  //   ? (GuessNumber = Math.round(Math.random() * intervalo.value))
  //   : ''

  console.log(GuessNumber)

  const logic =
    guess.value > GuessNumber
      ? (situation = 'O número é maior!')
      : (situation = 'O número é menor')

  guess.value == GuessNumber
    ? (situation = 'Parabéns, você conseguiu adivinhar!')
    : logic

  advice.innerHTML = situation
}

function numberOfTry() {
  chancesNumber > 0
    ? (chances.innerHTML = `Você ainda tem ${chancesNumber} tentativas!`)
    : (chances.innerHTML = 'Suas tentativas acabaram :(')
  chancesNumber = chancesNumber - 1
}
