const rollDice = document.querySelector('.btn--roll')
let diceImage = document.querySelector('.dice')


// ============ Player 1 ================================
const score1 = document.querySelector('#score--0')
let currentPoints1 = document.querySelector('#current--0')


// ============ Player 2 ================================
const score2 = document.querySelector('#score--1')
let currentPoints2 = document.querySelector('#current--1')

function displayDiceImage(source){
  diceImage.src = source
}

function addToCurrentPoints(value){
  currentPoints1.textContent = Number(currentPoints1.textContent) + value
}

rollDice.addEventListener('click',function(){
  let diceNumber = Math.abs(Math.round(Math.random() * 10) - 4)
  console.log(diceNumber)
  if(diceNumber !== 0){
    switch(diceNumber){
      case 1:
        displayDiceImage('img/dice-1.png')
        currentPoints1.textContent = 0
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
})

const holdBtn = document.querySelector('.btn--hold')

holdBtn.addEventListener('click',function(){
  score1.textContent = currentPoints1.textContent
  if (score1.textContent >= 100){
    console.log('You win!')
  }
})

const newGameBtn = document.querySelector('.btn--new')

newGameBtn.addEventListener('click',function(){
  window.location.reload(true)
  diceImage.classList.add('dice-hidden')
})