const rollDice = document.querySelector('.btn--roll')
let diceImage = document.querySelector('.dice')


// ============ Player 1 ================================
const score1 = document.querySelector('#score--0')
let currentPoints1 = document.querySelector('#current--0')


// ============ Player 2 ================================
const score2 = document.querySelector('#score--1')
let currentPoints2 = document.querySelector('#current--1')



rollDice.addEventListener('click',function(){
  let diceNumber = Math.abs(Math.round(Math.random() * 10) - 4)
  console.log(diceNumber)
  if(diceNumber !== 0){
    switch(diceNumber){
      case 1:
        diceImage.src = 'img/dice-1.png'
        currentPoints1.textContent = 0
        break
      case 2:
        diceImage.src = 'img/dice-2.png'
        currentPoints1.textContent = Number(currentPoints1.textContent) + 2
        
        break
      case 3:
        diceImage.src = 'img/dice-3.png'
        currentPoints1.textContent = Number(currentPoints1.textContent) + 3
        
        break
      case 4:
        diceImage.src = 'img/dice-4.png'
        currentPoints1.textContent = Number(currentPoints1.textContent) + 4
      
        break
      case 5:
        diceImage.src = 'img/dice-5.png'
        currentPoints1.textContent = Number(currentPoints1.textContent) + 5
     
        break
      case 6:
        diceImage.src = 'img/dice-6.png'
        currentPoints1.textContent = Number(currentPoints1.textContent) + 6
       
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