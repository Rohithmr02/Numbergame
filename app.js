var msg1=document.getElementById("msg1");
var msg2=document.getElementById("msg2");
var msg3=document.getElementById("msg3");
var result=Math.floor(Math.random()*10)-1;
var no_of_guesses=0;
var guesses_num=[];

function play(){
    var user_guess=document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert("Enter the Number between 1 to 10");
     }
     else{
        guesses_num.push(user_guess);
        no_of_guesses=no_of_guesses+1;
        if(user_guess < result){
            msg1.textContent = "Your Guess is Low." ;
            msg2.textContent = "Number of guess:" + no_of_guesses ;
            msg3.textContent= "Guessed Number are:" +guesses_num ;
        }
        else if(user_guess>result){
            msg1.textContent = "Your Guess is High." ;
            msg2.textContent = "Number of guess:" + no_of_guesses ;
            msg3.textContent= "Guessed Number are:" +guesses_num ;
        }
        else if(user_guess==result){
            msg1.textContent = "You Won." ;
            msg2.textContent = "The Number is:" + result ;
            msg3.textContent= "You guessed:" +no_of_guesses+ "Guesses" ;
        }

     }
}