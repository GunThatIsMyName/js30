const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
// build out fuctions

const togglePlay = ()=>{
    const control = video.paused?"play":"pause";
    video[control]();
}

const handlePlay=(e)=>{
    const control = video.paused?"▶️":"⏸";
    toggle.textContent=control;
}

const handleSkip=(e)=>{
    const skipTime=parseFloat(e.target.dataset.skip)
    return video.currentTime += skipTime;
}

const handleRange=(e)=>{
    const {value}=e.target;
    const {name}=e.target;
    // if(name==="volume"){
    //     return video.volume =value;
    // }else{
    //     return video.playbackRate=value;
    // }
    video[name]=value;
}

const handleTime=()=>{
    const percent = video.currentTime/video.duration *100;
    progressFilled.style.flexBasis=`${percent}%`;
}
const handlePlayTime=(e)=>{
    console.log("dd")
    const current = e.offsetX/progress.offsetWidth*video.duration;
    video.currentTime=current
}
// event listener

video.addEventListener("play",handlePlay)
video.addEventListener("pause",handlePlay)
video.addEventListener("click",togglePlay)
video.addEventListener("timeupdate",handleTime)

toggle.addEventListener("click",togglePlay)
progress.addEventListener("click",handlePlayTime)

skipButton.forEach(skip=>skip.addEventListener("click",handleSkip))
ranges.forEach(item=>item.addEventListener("input",handleRange))