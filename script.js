const images = document.querySelectorAll('.img-fluid')
const buttonReady = document.querySelector('.ready-btn')
const cardImg = document.querySelectorAll('.card-img-top')
const li = document.querySelectorAll('.price-wrapper li')
const audio = document.querySelectorAll('.audio-block')

for (let x of li){
    x.addEventListener('mouseover', function (){
        x.style.color = 'red'
        x.style.transition = ['all', '.3s']
    })
    x.addEventListener('mouseout', function (){
        x.style.color = '#fff'
    })
}

setInterval(function(){
    for (let i=0; i<images.length; i++){
        images[i].addEventListener('mouseover', function(){
            images[i].classList.add('img-fluid--active')
        })
        images[i].addEventListener('mouseout', function(){
            images[i].classList.remove('img-fluid--active')
        })
    }
}, 200)

function sound() {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = './audio.mp3'
    audio.play()
}
for (let one of audio){ one.addEventListener('click', sound) }

buttonReady.addEventListener('click', function(){
    alert('Your request is being processed')
})

const obj = {}
obj.a = cardImg[0]
obj.b = cardImg[1]
obj.c = cardImg[2]
for (let x of Object.values(obj)){
    x.addEventListener('click', function(){
        x.classList.toggle('card-img-top--active')
    })
}

