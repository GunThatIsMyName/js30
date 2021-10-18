const handleKey =(e)=>{
    player(e.keyCode)
}
const handleRemove = (e)=>{
    if(e.propertyName!=="transform")return;
    e.target.classList.remove("playing")
}
const handleClick = (e)=>{
    const {target} =e
    if(target.nodeName ==="DIV"||target.parentNode.nodeName==="DIV"){
        const number = target.dataset.key || target.parentNode.dataset.key
        if(!number)return;
        player(number)
    }
}

const player = (feature)=>{
    const audio = document.querySelector(`audio[data-key="${feature}"]`)
        const key = document.querySelector(`.key[data-key="${feature}"]`)
        audio.play();
        audio.currentTime = 0;
        key.classList.add("playing")
}

const keys = document.querySelectorAll(".key")
window.addEventListener("keydown",handleKey)
document.addEventListener("click",handleClick)
keys.forEach(key=>{
    key.addEventListener("transitionend",handleRemove)
})
