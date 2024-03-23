let blocks=document.querySelectorAll("#block");
let newGame=document.getElementById("newGame");
let resetGame=document.getElementById("resetGame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");


let turno=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [3,4,5],
    [1,4,7]
];

blocks.forEach((block) => {
    block.addEventListener("click",() => {
        console.log("block was clicked");
        if(turno==true)
        {
            block.innerText="0";
            turno=false;

        }
        else{
            block.innerText="X"
            turno=true;
        }
    block.disabled=true;
        checkWinner();

    })

});
 
const resetbtn =() =>{
    turno=false;
    enableBlock();
     msgContainer.classList.add("hide");
}

const enableBlock = () =>{
    for(let block of blocks)
    {
    block.innerText="";
    block.disabled=false;
    }
    
}

const disableBlock = () => {
    for (let block of blocks)
    {
        block.disabled=true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBlock();
}

const checkWinner = () => {
    
        for(let pattern of winPattern)
        {
            
            let pos1val=blocks[pattern[0]].innerText;
            let pos2val=blocks[pattern[1]].innerText;
            let pos3val=blocks[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !="")
            {
                if(pos1val=== pos2val && pos2val === pos3val)
                {
                    console.log("winner");
                    console.log(pos1val);
                    showWinner(pos1val);
                }
            }
        }
    
};

resetGame.addEventListener("click",resetbtn);
newGame.addEventListener("click",resetbtn);;
