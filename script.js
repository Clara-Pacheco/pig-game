// Selecting elements
const rollDice = document.querySelector('.btn--roll')
let diceImage = document.querySelector('.dice')


// ============ Player 1 ================================
const score1 = document.querySelector('#score--0')
let currentPoints1 = document.querySelector('#current--0')


// ============ Player 2 ================================
const score2 = document.querySelector('#score--1')
let currentPoints2 = document.querySelector('#current--1')

// ============ Storing both scores in an array =============

const scores = [0,0]

// ============ Create a variable to active player ===========

let activePlayer = 0; // the game starts with player number 1

// ============ Create a variable to playing game or not ===========

let playing =  true

function displayDiceImage(source){
  diceImage.src = source
}

function addToCurrentPoints(value){
  document.querySelector(`#current--${activePlayer}`).textContent = Number(document.querySelector(`#current--${activePlayer}`).textContent) + value
}

function ifDiceNumber1(activePlayer){
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  document.querySelector(`#score--${activePlayer}`).textContent = 0
 
}

function activeBackground(activePlayer){
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
}

function removeBackground(activePlayer){
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
}

function switchPlayer(){
  if(activePlayer == 0){
    activePlayer = 1
    activeBackground(1)
    removeBackground(0)
  }else{
    activePlayer = 0
    activeBackground(0)
    removeBackground(1)
  }
}

// Starting conditions

// Setting initial points to both players as 0 and
// dice display to none

currentPoints1.textContent = 0
currentPoints2.textContent = 0
diceImage.style.display = 'none'


rollDice.addEventListener('click',function(){
if(playing){
  let diceNumber = Math.abs(Math.ceil(Math.random() * 10) - 4)
  console.log(diceNumber)
  if(diceNumber !== 0){
    diceImage.style.display = 'block'
    switch(diceNumber){
      case 1:
        displayDiceImage('img/dice-1.png')
        ifDiceNumber1(activePlayer)
        switchPlayer()
        // if(activePlayer == 0){
        //   activePlayer = 1
        //   activeBackground(1)
        //   removeBackground(0)
        // }else{
        //   activePlayer = 0
        //   activeBackground(0)
        //   removeBackground(1)
        // }
        break
      case 2:
        displayDiceImage('img/dice-2.png')
        addToCurrentPoints(2)
       
        break
      case 3:
        displayDiceImage('img/dice-3.png')
        addToCurrentPoints(3) 
        
        break
      case 4:
        displayDiceImage('img/dice-4.png')
        addToCurrentPoints(4)
        
        break
      case 5:
        displayDiceImage('img/dice-5.png')
        addToCurrentPoints(5)
        
        break
      case 6:
        displayDiceImage('img/dice-6.png') 
        addToCurrentPoints(6)
       
        break
    }
    
  }
 }
})

const holdBtn = document.querySelector('.btn--hold')

holdBtn.addEventListener('click',function(){
  if(playing){
  document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + Number(document.querySelector(`#current--${activePlayer}`).textContent)
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  if(document.querySelector(`#score--${activePlayer}`).textContent >=100){
    playing = false
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    diceImage.style.display = 'none'
    alert('Congratulations! You won the game! 🎉')
    
  }else{
    switchPlayer()
    // if(activePlayer == 0){
    //   activePlayer = 1
    //   activeBackground(1)
    //   removeBackground(0)
    // }else{
    //   activePlayer = 0
    //   activeBackground(0)
    //   removeBackground(1)
    // }
  }
 } 
})

const newGameBtn = document.querySelector('.btn--new')

function newGame(){
  window.location.reload(true)
}

newGameBtn.addEventListener('click',newGame)