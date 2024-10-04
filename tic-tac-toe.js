let boxes = document.querySelectorAll(".box");
let WinnerContainer = document.querySelector(".winner-container");
let winnreMsg = document.querySelector(".msg"); 
let newGameBtn = document.querySelector(".new-game");
let resetBtn = document.querySelector(".reset-btn");
let turnO = true;
let count = 0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let newGame = () => {
    turnO = true;
    WinnerContainer.classList.add("hide");
    enable();
}

let disable = () => {
    for(let box of boxes){
        box.disabled = true;
        }
    }

let enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "rgb(40, 22, 1)";
        }else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "burlywood";
        }
        winner(box);

        if(count == 9){
            winnreMsg.innerText = "game was draw.."
            WinnerContainer.classList.remove("hide");
            disable();
        }
    })
})

let showWinner = (frstVal) => {
   winnreMsg.innerText = `Congratulations ${frstVal} you win!`
   WinnerContainer.classList.remove("hide");
   disable();
}

let winner = () => {
    winPatterns.forEach((pattern) => {
        let frstVal = boxes[pattern[0]].innerText;
        let scndVal = boxes[pattern[1]].innerText;
        let thrdVal = boxes[pattern[2]].innerText;

        if(frstVal != "" && scndVal != "" && thrdVal != ""){
            if( frstVal == scndVal && scndVal == thrdVal){
               
               showWinner(frstVal);
            }
        }
    })
}
newGameBtn.addEventListener("click",  newGame);
resetBtn.addEventListener("click",  newGame);