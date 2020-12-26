// line (empty div before num "1")
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// we have more then one "circle" so we can select them all as a node list (similar to an array)
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // this if statment is to prevent the line going beyond the last number of the list
    if(currentActive > circles.length) {
        currentActive = circle.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach(
        (circle, idx) => {
            if(idx < currentActive) {
                circle.classList.add('active')
            } 
            else {
                circle.classList.remove('active')
            }
        } 
    ) //forEach

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    /* the if/else statments changes the "next" and "previous" buttons to either enabled or disabled*/
    // 
    // if is the first num is active, disable prev button
    if(currentActive === 1) {
        prev.disabled = true
    }
    // if the the last button is active the next button is disabled
    else if(currentActive === circles.length) {
        next.disabled = true
    }
    // if either of the middle numbers are active, both next and previous buttons are enabled
    else {
        prev.disabled = false
        next.disabled = false
    }

}