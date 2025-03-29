let userscore=0;
let compscore=0;
let display=document.querySelector("#msg");
let choise=document.querySelectorAll(".box");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");

const compchoisegen=()=>{
    let arr=["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
const playgame=(userchoise)=>{
    console.log("user choise",userchoise);
    // console.log(compchoise)
    const compchoise=compchoisegen();
    console.log("computer choise",compchoise);
    let winner;
    if(userchoise==="rock"&&compchoise==="scissors"||userchoise==="paper"&&compchoise==="rock"
        ||userchoise==="scissors"&&compchoise==="paper"){
         winner ="user";
    }
    else if(userchoise!=compchoise){
        winner="computer";
    }
    else {
        showdraw(userchoise);
    }
    showwinner(winner,userchoise,compchoise);
}
const showwinner=(x,user,comp)=>{
    if(x==="user"){
        userscore++;
        display.innerText=`You Won with ${user} against ${comp}`;
        console.log(`You Won with ${user} against ${comp}`);
        // display.classList.add(".wincolor");
        display.style.backgroundColor="green";
        uscore.innerText=userscore;
    }
    else if(x==="computer"){
        compscore++;
        display.innerText=`You lose with ${user} against ${comp}`;
        // console.log("winer is",x);
        // display.classList.add(".loosecolor");
        display.style.backgroundColor="red";
        console.log(`You lose with ${user} against ${comp}`);
        cscore.innerText=compscore;
    }

}
const showdraw=(draw)=>{
    display.innerText=`game is drawn with ${draw}`;
    console.log("game is drawn");
    display.style.backgroundColor="grey";
}
choise.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userchoise=box.getAttribute("id");
        // console.log("choises was clicked",choise);
        playgame(userchoise);
    })
})