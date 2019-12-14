window.onload = function (){
    var p1Button = document.getElementById("p1");
    var p2Button = document.querySelector("#p2");
    var resetButton = document.querySelector("#reset");
    var p1Score = 0;
    var p2Score = 0;
    var p1Display = document.querySelector("#p1Points");
    var p2Display = document.querySelector("#p2Points");
    var gameOver = false;
    var winningScore = 5;
    var numInput = document.querySelector("input")
    var targetScore = document.querySelector("p span")

    p1Button.addEventListener("click", function(){
      if(!gameOver){
        p1Score++;
       console.log(p1Score);
       p1Display.textContent = p1Score;
       if(p1Score === winningScore){
           console.log("GAME OVER!!")
           p1Points.classList.add("winner");
           gameOver = true;
       }
      }
    });

    p2Button.addEventListener("click", function(){
      if(!gameOver){
          p2Score++;
          console.log(p2Score);
          p2Display.textContent = p2Score;
          if(p2Score === winningScore){
              console.log("GAME OVER!!")
              p2Points.classList.add("winner");
              gameOver = true;
        };
      };
    });
    resetButton.addEventListener("click", function()
      {
        reset();
        targetScore.textContent = 0;
      });
    numInput.addEventListener("change", function(){
        targetScore.textContent = this.value;
        winningScore = Number(this.value);
        reset();
    })
    function reset(){
        p1Score = 0;
        p2Score = 0;
        p2Display.textContent = 0;
        p1Display.textContent = 0;
        gameOver = false;
        p1Points.classList.remove("winner");
        p2Points.classList.remove("winner");
    }
}
