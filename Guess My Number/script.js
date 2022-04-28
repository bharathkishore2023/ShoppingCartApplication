'use strict';
const secretNum=Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent=secretNum;
document.querySelector('.check').addEventListener
('click',function(){
  const guess= document.querySelector('.guess').value;
  document.querySelector('.score').textContent=score;
 // console.log(score);
  if(guess==secretNum) {
      document.querySelector('.message').textContent='Correct Answer!'; 
      console.log(document.querySelector('.score').textContent=score);
 } 
 else if(guess>secretNum) {
     document.querySelector('.message').textContent="Too High";
     score-=20;
 }
 else if(guess<secretNum){
     document.querySelector('.message').textContent="Too Low";
     score-=20;
 }
});






