
const secondHand = document.querySelector(".second-hand")
const minutesHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

const rotate = (time,hour)=>{
    if(hour){
        return ((time/12)*360+90);
    }
    return ((time/60)*360+90);
}

const getTime = ()=>{
    const currentTime = new Date();
    const getSeconds = currentTime.getSeconds();
    const getMinutes =currentTime.getMinutes();
    const getHours =currentTime.getHours();

    secondHand.style.transform=`rotate(${rotate(getSeconds)}deg)`;
    minutesHand.style.transform=`rotate(${rotate(getMinutes)}deg)`;
    hourHand.style.transform=`rotate(${rotate(getHours,"hour")}deg)`;


}

setInterval(getTime, 1000);