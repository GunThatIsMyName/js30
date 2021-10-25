const list = [...document.querySelectorAll("li")];

const convertTime=(time)=>{
    const hours = Math.floor(time /3600);
    const mins = Math.floor(time % 3600 / 60);
    const secs = Math.floor(time%60);
    return `${hours}:${mins}:${secs}`
}

const timer = list.reduce((total,curr)=>{
    const minutes = curr.dataset.time;
    const [minss,secs] =minutes.split(":").map(parseFloat);
    return total+=minss*60+secs;
},0)

const hello = convertTime(timer);
console.log(hello)