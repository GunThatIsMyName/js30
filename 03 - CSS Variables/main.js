const controls = document.querySelectorAll(".controls input");

const handleInput =(e)=>{
    const sizing = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value+sizing)

}

controls.forEach(input=>{
    input.addEventListener("input",handleInput)
})