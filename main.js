let p1Button = document.querySelector('#p1');
let p2Button = document.querySelector('#p2');
let resetButton = document.querySelector('#reset');
let p1Score = 0;
let p2Score = 0;
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let gameOver  = false;
let winningScore = 5;
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector('p span');


p1Button.addEventListener('click', function(){
    if(!gameOver){
    p1Score ++;
     if(p1Score === winningScore){
         p1Display.classList.add('winner');
         p1Button.classList.add('winner2');
         gameOver = true;
     }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function(){
    if(!gameOver){
    p2Score ++;
    if(p2Score === winningScore){
        p2Display.classList.add('winner');
        p2Button.classList.add('winner2');
        gameOver = true;
    }
    p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function (){
    reset();
});
function reset (){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.classList.remove('winner');
    p1Button.classList.remove('winner2');
    p2Display.classList.remove('winner');
    p2Button.classList.remove('winner2');
}

numInput.addEventListener('change', function(){
 winningScoreDisplay.textContent = this.value;
 winningScore = Number(this.value);
 reset();
})
