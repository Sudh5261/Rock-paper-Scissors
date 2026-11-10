let userScore=0;//user score will be calculated
let compScore=0;//computer score will be calculated
const choices=document.querySelectorAll(".choice");//selected all three choices of rock paper and scissors
const msg=document.querySelector("#msg");//the msg box is selected
const userScorePara=document.querySelector("#user-score");//the scoer will be stored in this paragraph
const compScorePara=document.querySelector("#comp-score");//computer score will be stored in this paragraphs
const resetBtn=document.querySelector("#reset"); //it will reset all the scores and starts a fresh game


const gameRestart=()=>{
    userScorePara.innerText=0;         //this is the reset game function.
    compScorePara.innerText=0;
    userScore=0;
    compScore=0;
}

resetBtn.addEventListener("click",gameRestart);  //Event is assigned to the button if clicked



const showWinner=(userWin,userChoice,compChoice)=>{   //This is called in playgame function when all the results
    if(userWin===true){                               //will be calculated and here only decison will be done that 
        userScore++;                                  //if the userWin will contain true then score of the user is 
        userScorePara.innerText=userScore;            //increased and assigned to the paragraph and printed.
        msg.innerText=`You Won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        msg.innerText=`You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const drawGame=()=>{
    msg.innerText="Game Draw";//if the userChoice match with the compChoice then this function will be called.
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomInx=Math.floor(Math.random()*3);//Math.floor will remove the decimal points
    //math.random will generate only numbers btw 0 to 1 so we multiplied it
    //  by 3 so that it will gen till 0 to 2 and one of the option is selected.
    return options[randomInx];
}

const playGame=(userChoice)=>{    //here the randomly generated compChocie is called as a function
    //Generate computer choice    and the main logic is here in the function playGame
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //Draw game              if the choice of user and comp will be matched the drawGame func will be called.
        drawGame();
    }else{
        let userWin=true;             
        if(userChoice==="rock"){                           //here is all the main logic that if the user choose paper   
            userWin= compChoice==="paper"? false:true;     //then all the posiblities of computer will be checked for eg if use choose
        }else if(userChoice==="paper"){                    //paper then the probablity will be checked with the computer for rock and scissors
            userWin=compChoice==="scissor"?false:true;     // because if the computer will chosse the paper then drawGame will be called
        }else if(userChoice==="scissor"){                  //so there is only 2 probablities.similarly all will be calculated.
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);      //finally showWinner is called with the arguments of userWin value as true of false
    }                                                   //and userChoice and compChoice
}



choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{                 //here all the choices are traversed and the id's of all are 
        const userChoice=choice.getAttribute("id");       //extracted so that it will be matched with the compChoice which is 
        playGame(userChoice);                             //randomly generated.
    })
})