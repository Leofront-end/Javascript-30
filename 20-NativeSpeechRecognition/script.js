window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.interinResults = true

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e => {
    console.log(e.results)
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript)
    console.log(transcript)
})

recognition.start()