const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const textArea = document.querySelector(`[name="text"]`);
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text=document.querySelector(`[name="text"]`).value


console.log(options)
const handleVoiceChange=(e)=>{
    voices =e.target.getVoices();
    voicesDropdown.innerHTML=voices.map(item=>{
        return `<option value="${item.name}"">${item.name} (${item.lang})</option>`
    })
}

const handleChange=(e)=>{
    msg.voice = voices.find(voice=>voice.name===e.target.value);
    toggle()
}
const toggle=(start=true)=>{
    console.log(start,"?")
    speechSynthesis.cancel();
    if(start){
        speechSynthesis.speak(msg)
    }
}
const handleOption=(e)=>{
    msg[e.target.name]=e.target.value;
    toggle()
}
speakButton.addEventListener("click",toggle)
stopButton.addEventListener("click",()=>toggle(false))

options.forEach(item=>item.addEventListener("change",handleOption));

voicesDropdown.addEventListener("change",handleChange)
speechSynthesis.addEventListener("voiceschanged",handleVoiceChange)