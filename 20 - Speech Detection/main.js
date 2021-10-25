window.SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const btn = document.querySelector("btn")
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

const handleResult = (e) => {
  const transcript = Array.from(e.results)
    .map((result) => {
      return result[0].transcript;
    })
    .join('');
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
};

btn.addEventListener("click",)
recognition.addEventListener('result', handleResult);
recognition.addEventListener('end', recognition.start);

recognition.lang = 'ko-KR';
recognition.start();