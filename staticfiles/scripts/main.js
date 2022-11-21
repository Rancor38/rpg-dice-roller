// cached variables 

// sounds
// const rollSound = new Audio('audioAddressHere')
// an array os sounds
const soundArr = []
// play an array of souns
// const variable_name = rollSound.play()

//quantities
const q1 = document.querySelector('#one')
const q2 = document.querySelector('#two')
const q3 = document.querySelector('#three')
const q4 = document.querySelector('#four')
const q5 = document.querySelector('#five')
const q6 = document.querySelector('#six')
const q7 = document.querySelector('#seven')
const q8 = document.querySelector('#eight')
const q9 = document.querySelector('#nine')
const q10 = document.querySelector('#ten')
const currentDiceQ = document.querySelector('#currentDiceQ')

// //dice type
const d2 = document.querySelector('#d2')
const d4 = document.querySelector('#d4')
const d6 = document.querySelector('#d6')
const d8 = document.querySelector('#d8')
const d10 = document.querySelector('#d10')
const d12= document.querySelector('#d12')
const d20= document.querySelector('#d20')
const d100 = document.querySelector('#d100')

// results and total

let result = document.getElementById('result')
let total = document.getElementById('total')

// //roll and reset and resetQ
const roll = document.querySelector('#roll')
const reset = document.querySelector('#reset')
const resetQ = document.querySelector('#resetQ')

// //event listeners
q1.addEventListener("click", () => {selectQuantity(1)})
q2.addEventListener("click", () => {selectQuantity(2)})
q3.addEventListener("click", () => {selectQuantity(3)})
q4.addEventListener("click", () => {selectQuantity(4)})
q5.addEventListener("click", () => {selectQuantity(5)})
q6.addEventListener("click", () => {selectQuantity(6)})
q7.addEventListener("click", () => {selectQuantity(7)})
q8.addEventListener("click", () => {selectQuantity(8)})
q9.addEventListener("click", () => {selectQuantity(9)})
q10.addEventListener("click", () => {selectQuantity(10)})


d2.addEventListener('click', () => {selectDice(2)})
d4.addEventListener('click', () => {selectDice(4)})
d6.addEventListener('click', () => {selectDice(6)})
d8.addEventListener('click', () => {selectDice(8)})
d10.addEventListener('click', () => {selectDice(10)})
d12.addEventListener('click', () => {selectDice(12)})
d20.addEventListener('click', () => {selectDice(20)})
d100.addEventListener('click', () => {selectDice(100)})

roll.addEventListener('click', () => {rollDice(diceType, quantity)})
reset.addEventListener('click', () => {resetDice()})
resetQ.addEventListener('click', () => { resetQuantity() })

// write a func that adds a div we shape in css behind the total
// const removeShape = () => {
//     document.querySelectorAll(".sticker").forEach(el => el.remove())
// }
// const totalDesign = document.getElementById("total")
// const div5 = document.getElementsByClassName("div5")

// const addShape = () => {
//     const para = document.createElement("div")
//     para.innerHTML = "This is a shape"
//     let findDiv = document.body.firstChild.nextSibling
//     console.log(findDiv)
//     document.body.appendChild(para).classList.add("sticker")
//     document.body.appendChild(para).classList.add("d4")
//     // totalDesign.parentNode.insertBefore("div", totalDesign.nextSibling)
// }




// the type of dice
let diceType = 0;
// selectDice Function
const selectDice = (num) => {
    diceType = num
    if (quantity === 0) {
        selectQuantity(1)
    }
    return diceType
} 
// the quantity of dice
let quantity = 0;
// selectQuantity
const selectQuantity = (q) => {
    quantity += q
    return (quantity) && (currentDiceQ.innerText = quantity)
}

// all numbers rolled
let rolledNumArr = []

// roll a dice function
const rollDice = (diceType, quantity) => {
    resetDice()
    for (let i = 0; i < quantity; i+=1) {
        const rolledNum = Math.ceil(Math.random() * diceType)
        rolledNumArr.push(rolledNum)
        result.textContent = rolledNumArr
    }
    totalFunction()
}
// resetDice function
const resetDice = () => {
    if (document.getElementsByClassName("sticker")) {
    }
    return (rolledNumArr = []) && (result.innerText = rolledNumArr) && (total.innerText = null)
}
//  resetQ
const resetQuantity = () => {
    return (quantity = 0), (currentDiceQ.innerText = quantity)
}

//add up all dice 
const totalFunction = () => {
    total.innerText = rolledNumArr.reduce((prev, curr) => prev + curr);
}

// Change the shape of a given button, to the silhouette of the die
