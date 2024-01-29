let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.getElementById("msg");
let userSi=document.getElementById("user-score");
let compSi=document.getElementById("comp-score");


const genCompId=()=>{
    let options=["rock","paper","scissors"];
    let compIdx=Math.floor(Math.random()*3);
    return options[compIdx];
}
const gameDraw=()=>{
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="#589595";
}
const showWin=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userSi.innerText=userScore;
        msg.innerText=`You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compSi.innerText=compScore;
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
    
}

const playGame=(userChoice)=>{
    const compChoice=genCompId();
    if (userChoice===compChoice){
        gameDraw();
    }else {
        let userWin=true;
        if (userChoice="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if (userChoice="paper"){
            userWin=compChoice==="scissors"? false :true;
        }
        else{
            userWin=compChoice==="rock" ? false :true;
        }
        showWin(userWin,userChoice,compChoice);

    }
    
    }
    


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        

    });
}
);