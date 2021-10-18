const panels = document.querySelectorAll(".panel")

const handleClick = (e)=>{
    const target = e.target.nodeName ==="DIV" ? e.target : e.target.parentNode
    target.classList.toggle("open")
}
const handleEnd=(e)=>{
    console.log(e.target)
    if(e.propertyName.includes("flex")){
        e.target.classList.toggle("open-active")
    }
}
document.addEventListener("transitionend",handleEnd)
document.addEventListener("click",handleClick)
