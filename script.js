//--------Text--------//
const message = document.querySelector('#message')
const advice = document.querySelector('#advice')
const chances = document.querySelector('#chances')
const winner = document.querySelector('#winner')
const feedback = document.querySelector('#feedback')

//--------Inputs--------//
const intervalo = document.querySelector('#intervalo')
const nick = document.querySelector('#nick')
const guess = document.querySelector('#guess')

//--------Open and Close PopUp--------//
const togglePopUp = () => {
  document.querySelector('.popUpMessage').classList.toggle('animation')
  document.querySelector('.popUp').classList.toggle('active')
}

//--------Js Variable--------//
let GuessNumber
let chancesNumber = 2

//--------Js Functions--------//
const startGame = () => {
  if (nick.value == '') {
    alert('Por favor, preencha um nome valido')
    throw new Error('Por favor, preencha um nome valido')
  } else {
    message.innerHTML = `Olá <strong>${nick.value}</strong>, vamos jogar!<br/>
    De acordo com a opção de intervalo que você escolheu, descubra o número.`
    disabledToggle()
  }
  GuessNumber === undefined
    ? (GuessNumber = Math.round(Math.random() * intervalo.value))
    : ''

  GuessNumber === 0 ? (GuessNumber += 1) : ''
}

const tryGuess = () => {
  console.log(GuessNumber)
  const rules = guess.value == GuessNumber ? winnerPopUp() : numberOfTry()
  GuessNumber != undefined
    ? rules
    : alert(
        'Antes de começar, cadastre seu nome de jogador e defina um modo de jogo!'
      )
}

const winnerPopUp = () => {
  togglePopUp()
  winner.innerHTML = `<strong>Parabéns ${nick.value}, Você conseguiu adivinhar!<strong/>`
  feedback.textContent = `Continue jogando, explore os modos mais difíceis e não pare até ficar craque nesse jogo!`
}

function numberOfTry() {
  let situation
  guess.value > GuessNumber
    ? (situation = 'O número é maior!')
    : (situation = 'O número é menor')

  advice.innerHTML = situation

  chancesNumber > 0
    ? (chances.textContent = `Você ainda tem ${chancesNumber} tentativas!`)
    : (chances.textContent = 'Suas tentativas acabaram :(')

  chancesNumber -= 1
}

const resetGame = () => {
  if (GuessNumber != undefined) {
    chancesNumber = 2
    chances.textContent = ''
    advice.textContent = ''
    message.textContent = ''
    guess.value = ''
    GuessNumber = undefined
    disabledToggle()
  }
}

const disabledToggle = () => {
  guess.toggleAttribute('disabled')
  intervalo.toggleAttribute('disabled')
  nick.toggleAttribute('disabled')
}
