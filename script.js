const rollDice = document.querySelector('.btn--roll')

rollDice.addEventListener('click',function(){
  let diceNumber = Math.abs(Math.round(Math.random() * 10) - 4)
  console.log(diceNumber)
  if(diceNumber !== 0){
    switch(diceNumber){
      case 1:
        document.querySelector('.dice').src = 'img/dice-1.png'
        document.querySelector('#current--0').textContent = 0
        break
      case 2:
        document.querySelector('.dice').src = 'img/dice-2.png'
        document.querySelector('#current--0').textContent = Number(document.querySelector('#current--0').textContent) + 2
        
        break
      case 3:
        document.querySelector('.dice').src = 'img/dice-3.png'
        document.querySelector('#current--0').textContent = Number(document.querySelector('#current--0').textContent) + 3
        
        break
      case 4:
        document.querySelector('.dice').src = 'img/dice-4.png'
        document.querySelector('#current--0').textContent = Number(document.querySelector('#current--0').textContent) + 4
      
        break
      case 5:
        document.querySelector('.dice').src = 'img/dice-5.png'
        document.querySelector('#current--0').textContent = Number(document.querySelector('#current--0').textContent) + 5
     
        break
      case 6:
        document.querySelector('.dice').src = 'img/dice-6.png'
        document.querySelector('#current--0').textContent = Number(document.querySelector('#current--0').textContent) + 6
       
        break
    }
    
  }
})

const holdBtn = document.querySelector('.btn--hold')

holdBtn.addEventListener('click',function(){
  document.querySelector('#score--0').textContent = document.querySelector('#current--0').textContent
})