const rollbutton = document.querySelector('.roll-button')

const dieRolls = []
let totalsElement = document.querySelector('.Total')
const allRolls = document.querySelector('.show-all-rolls')
const listElement = document.querySelector('ol')

rollbutton.addEventListener('click', function () {
    let diceRolled = document.querySelector('#number-of-dice').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled) {

        let diceRoll = Math.floor(Math.random() * 6 + 1);
        console.log(diceRoll)
        dieRolls.push(diceRoll)


        total += diceRoll
        counter += 1


    }

    console.log(dieRolls)
    totalsElement.innerHTML = 'the sum of the rolls ' + total
})

allRolls.addEventListener('click', function () {
    let counter = 0
    let total = 0
    while (counter < dieRolls.length) {
        allRolls.innerHTML += '<li>' + dieRolls[counter] + '</li>'

        counter += 1


        console.log(total)
    }
})