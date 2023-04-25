const button = document.getElementsByClassName('botao')
const audio1 = new Audio('./audios/clap.wav')

const button2 = document.getElementById('kick')
const audio2 = new Audio('./audios/kick.wav')

const button3 = document.getElementById('ping')
const audio3 = new Audio('./audios/pingbaixo.wav')

const button4 = document.getElementById('reverse')
const audio4 = new Audio('./audios/crash.wav')

const button5 = document.getElementById('reverse-kick')
const audio5 = new Audio('./audios/bumboReverse.wav')

/* EVENTS */

window.addEventListener('keydown', event => {
  if (event.code === 'KeyH') {
    audio1.pause()
    audio1.currentTime = 0
    audio1.play()
  }
  if (event.code === 'KeyJ') {
    audio2.pause()
    audio2.currentTime = 0
    audio2.play()
  }

  if (event.code === 'KeyK') {
    audio3.pause()
    audio3.currentTime = 0
    audio3.play()
  }
  if (event.code === 'KeyL') {
    audio4.pause()
    audio4.currentTime = 0
    audio4.play()
  }
  if (event.code === 'KeyP') {
    audio5.pause()
    audio5.currentTime = 0
    audio5.play()
  }
})

/* FUNCIONS */

function botao(valor) {
  switch (valor) {
    case 'clap':
      audio1.pause()
      audio1.currentTime = 0
      audio1.play()
      break

    case 'kick':
      audio2.pause()
      audio2.currentTime = 0
      audio2.play()
      break

    case 'ping':
      audio3.pause()
      audio3.currentTime = 0
      audio3.play()
      break

    case 'reverse':
      audio4.pause()
      audio4.currentTime = 0
      audio4.play()
      break

    case 'reverse-kick':
      audio5.pause()
      audio5.currentTime = 0
      audio5.play()
      break
  }
}

function configurar(audio, volume) {
  audio.volume = volume
}

/// VOLUME BUTTON ///

let sliderElement = document.querySelectorAll('#slider')

/*sliderElement.addEventListener('click', function () {
  if (sliderElement.value == 1) {
    audio1.volume = 0.1
  }
  if (sliderElement.value == 2) {
    audio1.volume = 0.2
  }
  if (sliderElement.value == 3) {
    audio1.volume = 0.3
  }
  if (sliderElement.value == 4) {
    audio1.volume = 0.4
  }
  if (sliderElement.value == 5) {
    audio1.volume = 0.5
  }
  if (sliderElement.value == 6) {
    audio1.volume = 0.6
  }
  if (sliderElement.value == 7) {
    audio1.volume = 0.7
  }
  if (sliderElement.value == 8) {
    audio1.volume = 0.8
  }
  if (sliderElement.value == 9) {
    audio1.volume = 0.9
  }
  if (sliderElement.value == 10) {
    audio1.volume = 1
  }
})*/
