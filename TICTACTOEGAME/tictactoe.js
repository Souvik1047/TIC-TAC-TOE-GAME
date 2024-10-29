let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".newbutton");
let button=document.querySelector(".button");
let newbutton=document.querySelector(".newbutton");
let winid=document.querySelector("#winid");
let checkarray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("The box in clicked");
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
}); 

const checkwinner = () =>{
for( possition of checkarray)
{
    let pattern1=boxes[possition[0]].innerText;
    let pattern2=boxes[possition[1]].innerText;
    let pattern3=boxes[possition[2]].innerText;

    if (pattern1!="" && pattern2!="" && pattern3!="") {
        if(pattern1===pattern2 && pattern2===pattern3)
        {
            console.log("winner" , pattern1);
            showwinner(pattern1);
        }
        
    }
}
}
const boxdisable=() =>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
const boxenable =()=>{
    box.disabled=false;
}
const resetall=() =>{
    turn0=true;
    for(box of boxes){
        box.innerText="";
        boxenable();
    }
    button.classList.add("hide");
}
const showwinner= (winner) =>{
    winid.innerText= `Congratulation the winner is ${winner}`;
    button.classList.remove("hide");
    boxdisable();
}
newbutton.addEventListener( "click", resetall)
