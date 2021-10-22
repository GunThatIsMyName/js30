const checkBox=document.querySelectorAll(`input[type="checkbox"]`)

let lastChecked;
let inBetween;
const handleClick=(e)=>{

    if(e.shiftKey){
        checkBox.forEach(check=>{
            console.log(check)
            if(check===lastChecked || check===e.target){
                inBetween=!inBetween;
                console.log("start")
            }
            if(inBetween){
                check.checked=true;
            }
        })
    }
    lastChecked=e.target;
}

checkBox.forEach(item=>{
    item.addEventListener("click",handleClick)
})