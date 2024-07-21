const app = document.querySelector(".app")
const hamster = document.querySelector(".app__target")
const countText = document.querySelector(".app__count")
const humsterImages = document.querySelector (".app__target-img")
const balloonEffect = document.querySelector(".balloon-effect")

function getCoin() {
    return Number(localStorage.getItem("coins"))
}

function nextLevel() {
    let coins = getCoin()
    if (15 <= coins && coins <= 30) {
        humsterImages.src = "images/lvl2.jpg";
    } else if (31 <= coins) {
        humsterImages.src = "images/lvl3.jpg";
    }
}

function addCoin() {
    localStorage.setItem("coins", getCoin() + 1)
}

function updateText() {
    countText.innerHTML = getCoin()
}

function addBalloonEffect(xPos, yPos) {
    var elem = balloonEffect.cloneNode(true)

    elem.style.display = "block";
    elem.style.left = xPos + 5 + "px";
    elem.style.top = yPos - 20 + "px";
    
    var newBallon = app.appendChild(elem);

    setTimeout(function() {
        newBallon.remove()
    }, 1000, newBallon)
}

hamster.addEventListener("click", function(event){
    addCoin()
    updateText() 
    nextLevel()
    addBalloonEffect(event.clientX, event.clientY)
})

updateText()
nextLevel()