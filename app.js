let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg")


let turenO= true;// playerX, playerO

const winPatterns=[       // ther are the wining condition
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turenO= true;
    anableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       // console.log("box was click");
        box.style.backgroundcolor="red";
        if(turenO){
            box.innerText="O";
            turenO=false;
            box.style.color="blue";
            
        }else{
            box.innerText="X";
            turenO=true;
            box.style.color="green";
        }
        box.disabled = true;     // once a click the box their are no next time is click

        checkwinner();
    });

});
const disableBoxes=()=>
{
    for (let box of boxes){
        box.disabled=true;
    }
};

const anableBoxes=()=>
    {
        for (let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation, Winner is ${Winner} `
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner =()=>{
    for(pattern of winPatterns){

       let pos1val= boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val!=""&&  pos2val!="" && pos3val!==""){
        if(pos1val===pos2val && pos2val===pos3val)
        {
           // console.log("winner" ,pos1val);
            showWinner(pos1val);
        };
     }; 
       
    };

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

