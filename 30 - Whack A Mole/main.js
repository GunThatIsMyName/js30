const scroe = document.querySelector(".score")
const game = document.querySelector(".game")
const hole = document.querySelectorAll(".hole")
const mole = document.querySelectorAll(".mole")

const btn = document.querySelector("button")

let lastHole;
let start =false;
let moled=0;
let gameTImer=10000;

const getRandomNumeber=(max,min)=>{
    return Math.round(Math.random()*(max-min)+min);
}
const getRandomHole=()=>{
    const idx = Math.floor(Math.random()*hole.length);
    if(lastHole===idx){
        console.log("!!!")
        return getRandomHole()
    }
    lastHole = idx;
    return hole[idx]
}

const peep = ()=>{
    const time = getRandomNumeber(100,1000);
    const holeNumber = getRandomHole();
    holeNumber.classList.add("up")
    setTimeout(() => {
        holeNumber.classList.remove("up")
        if(start) peep();
    }, time);
}
const catchTheMole=(e)=>{
    const {value}=e.target.classList;
    if(value!=="mole")return;
    moled++;
    scroe.textContent=moled;
    e.target.parentNode.classList.remove("up")
}
const startGame = ()=>{
    start=true
    moled=0;
    peep()
    setTimeout(() => {
        start=false
    }, gameTImer);
}

btn.addEventListener("click",startGame)
mole.forEach(item=>item.addEventListener("click",catchTheMole))