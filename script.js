//--------Text--------//
const winnerOrLoser = document.querySelector('.winnerOrLoser')
const feedback = document.querySelector('.feedback')

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
let chancesNumber

//--------Js Functions--------//
const startGame = () => {
  const setChances = () => {
    interval.value == 100 ? (chancesNumber = 4) : (chancesNumber = 6)
  }
  interval.value == 10 ? (chancesNumber = 2) : setChances()

  if (nick.value == '') {
    alert('Por favor, preencha um nome valido')
    throw new Error('Por favor, preencha um nome valido')
  } else {
    message.innerHTML = `Olá <strong>${nick.value}</strong>, vamos jogar!<br/>
    De acordo com a opção de intervalo que você escolheu, descubra o número.`
    chances.textContent = `Você tem ${chancesNumber + 1} tentativas de acertar!`
    GuessNumber = Math.round(Math.random() * interval.value)
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
  estava buscando era ${GuessNumber}!<strong/>`
  feedback.textContent = `${nick.value} não desanime, continue tentando! Depois de 
  algumas partidas você ficará craque nesse jogo!`
}

const hint = () => {
  let situation

  const standardHint = () => {
    guess.value > GuessNumber
      ? (situation = 'O número que você chutou é maior!')
      : (situation = 'O número que você chutou é menor!')
  }

  const hintOne = () => {
    let number = GuessNumber - Math.round(Math.random() * 50)
    number <= 0 ? (number = 1) : false

    return (situation = `O número está entre ${number} e ${guess.value - 1}`)
  }

  const hintTwo = () => {
    let number = GuessNumber + Math.round(Math.random() * 50)
    number > interval.value ? (number = interval.value) : false

    return (situation = `O número está entre ${guess.value} e ${number}`)
  }

  const GreatHint = () => {
    guess.value > GuessNumber ? hintOne() : hintTwo()
  }

  const gameMode = interval.value == 10 ? standardHint() : GreatHint()

  advice.innerHTML = situation
}

const numberOfTry = () => {
  hint()
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
  interval.toggleAttribute('disabled')
  nick.toggleAttribute('disabled')
  start.toggleAttribute('hidden')
}

//--------Getting GitHub Infos--------//
const getGitHubProfileInfos = () => {
  const url = `https://api.github.com/users/${GitHubInfo.value}`

  fetch(url)
    .then(response => response.json())
    .then(data => {})
}
