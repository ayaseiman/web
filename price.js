let path = document.querySelector('.path-line')
let circuit = document.querySelector('.circuit')
let light = document.querySelector('.light')
let pathLength = path.getTotalLength()
let number
console.log(path)
console.log(circuit)
console.log(light)
path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength
window.addEventListener('scroll', function addLight(){
    if (window.innerWidth <= 1018) {
        number = 5
    } else {
        number = 4
    }
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    let drawLength = pathLength * scrollPercentage
    path.style.strokeDashoffset = pathLength - drawLength
    if (drawLength >= 991) {
        light.classList.add('light--active')
        document.body.removeEventListener('scroll', addLight)
    } else light.classList.remove('light--active')
    drawLength >= 991 ? circuit.classList.add('circuit--active') : circuit.classList.remove('circuit--active')
})

const priceText = document.querySelectorAll('.price-wrapper .white-text')
priceText.forEach(x => {
    x.addEventListener('mouseover', function(){
        x.style.color = 'green'
        x.style.transition = ['all', '.3s']
    })
    x.addEventListener('mouseout', function(){
        x.style.color = '#fff'
        x.style.transition = ['all', '.3s']
    })
})

const btn = document.querySelector('.price-wrapper .btn-primary')
btn.addEventListener('click', () => {
    alert('Your request has been sent')
})