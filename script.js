//--------Text--------//
const message = document.querySelector('#message')
const advice = document.querySelector('#advice')
const chances = document.querySelector('#chances')
const winnerOrLoser = document.querySelector('.winnerOrLoser')
const feedback = document.querySelector('.feedback')

//--------Inputs--------//
const intervalo = document.querySelector('#intervalo')
const nick = document.querySelector('#nick')
const guess = document.querySelector('#guess')

//--------Button--------//
const start = document.querySelector('#start')

//--------Open and Close PopUp--------//
const togglePopUp = value => {
  const popUp = document.querySelector('.popUp')

  const winner = () => {
    // document.querySelector('.popUpMessage').classList.toggle('animation')
    popUp.classList.toggle('winner')
  }
  const loser = () => {
    popUp.classList.toggle('loser')
  }

  document.querySelector('.popUpMessage').classList.toggle('animation')

  const rules = () => (value == 2 ? winner() : loser())
  value == undefined ? popUp.classList.remove('loser', 'winner') : rules()
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
    GuessNumber = Math.round(Math.random() * intervalo.value)
    disabledToggle()
  }

  GuessNumber === 0 ? (GuessNumber += 1) : false
}

const tryGuess = () => {
  const rules = () =>
    guess.value == GuessNumber ? winnerPopUp() : numberOfTry()

  GuessNumber === undefined
    ? alert(
        'Antes de começar, cadastre seu nome de jogador e defina um modo de jogo!'
      )
    : rules()
}

const winnerPopUp = () => {
  togglePopUp(2)
  winnerOrLoser.innerHTML = `<strong>Parabéns ${nick.value}, Você conseguiu adivinhar!<strong/>`
  feedback.textContent = `Continue jogando, explore os modos mais difíceis e não pare até ficar craque nesse jogo!`
}

const loserPopup = () => {
  togglePopUp(3)
  winnerOrLoser.innerHTML = `<strong>Suas tentativas acabaram! O número que você 
  estava buscando era ${GuessNumber}.<strong/>`
  feedback.textContent = `${nick.value} não desanime, continue tentando! Depois de 
  algumas partidas você ficará craque nesse jogo!`
}

const numberOfTry = () => {
  // logica da dica = GuessNumber - guess.value + Math.round(Math.random() * 50

  let situation
  guess.value > GuessNumber
    ? (situation = 'O número é maior!')
    : (situation = 'O número é menor')

  advice.innerHTML = situation

  console.log(GuessNumber)

  chancesNumber > 0
    ? (chances.textContent = `Você ainda tem ${chancesNumber} tentativas!`)
    : loserPopup()

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
  start.toggleAttribute('hidden')
}
