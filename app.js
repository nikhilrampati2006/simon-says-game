let gameSeq=[];

let userSeq=[];

let started =false;
let level=0;

let btns=["palevioletred","lightseagreen","orange", "lightskyblue"]
let h4 = document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
    }
    started=true;
    levelUp();
});

function btnFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
         btn.classList.remove("flash");

    },250);
}
function levelUp(){


    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx =Math.floor(Math.random()*btns.length);


    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    
    gameSeq.push(randColor);
    
    btnFlash(randBtn);
}
function userFlash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
         btn.classList.remove("userflash");

    },250);
}

function checkAns(idx){

    

    if(userSeq[idx] === gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length)
       {
        setTimeout(levelUp,1000);
       }

    }else{
        h4.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";

        },150);
        reset();
    }
    
}
function btnPress(){
    let btn =this;
    userFlash(btn);
    userColor =btn.getAttribute("id");

    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}




let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}


function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level =0;
}
