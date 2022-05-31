const nick = document.getElementById('nick')
const message = document.querySelector('#message')
const intervalo = document.querySelector('#intervalo')
const advice = document.querySelector('#advice')
const chances = document.querySelector('#chances')
const guess = document.querySelector('#guess')

let GuessNumber
let chancesNumber = 3

const resetGame = () => {
  let chancesNumber = 3
  chances.value = ''
  advice.value = ''
  message.value = ''
  GuessNumber = undefined
}

const startGame = () => {
  if (nick.value == '') {
    alert('Por favor, preencha um nome valido')
    throw new Error('Por favor, preencha um nome valido')
  } else {
    message.innerHTML = `Olá <strong>${nick.value}</strong>, vamos jogar!<br/>
    De acordo com a opçao de intervalo que você escolheu, descubra o número.`
  }
}

const tryGuess = () => {
  let situation
  // let chancesNumber = 3
  GuessNumber === undefined
    ? (GuessNumber = Math.round(Math.random() * intervalo.value))
    : ''

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
