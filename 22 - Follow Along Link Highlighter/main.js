const a = document.querySelectorAll("a");
const span = document.createElement("span");
span.classList.add("highlight")
document.body.append(span);



const handleMouseUp=(e)=>{
    const elementPosition=e.target.getBoundingClientRect()
    const coords ={
        height:elementPosition.height,
        width:elementPosition.width,
        X:elementPosition.left+window.scrollX,
        Y:elementPosition.top+window.scrollY
    }
    console.log(elementPosition)
    span.style.height=`${coords.height}px`;
    span.style.width=`${coords.width}px`;
    span.style.transform=`translate(${coords.X}px, ${coords.Y}px)`
}

a.forEach(item=>{
    item.addEventListener("mouseover",handleMouseUp)
})