function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return //Parar a função tudo junto]
    audio.currentTime = 0 // Volta para o inicio
    audio.play()
    key.classList.add('border-warning')
    setTimeout(() => {
        key.classList.remove('border-warning')
    }, 1000)
}

window.addEventListener('keydown', playsound)

// CONTEUDO DA AULA 
// function removeTransition(e){
//     if (e.propertyName !== 'transition') return
//     this.classList.remove('border-warning')
// }

// const keys = document.querySelectorAll('.key')
// keys.forEach(key => key.addEventListener('transitionend', removeTransition))