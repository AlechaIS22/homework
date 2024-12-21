let minNumber = 1
let maxNumber = 100

let numberFirstPC = Math.ceil(Math.random() * maxNumber)
let numberSecondPC = Math.ceil(maxNumber / 2)

console.log(`Компьютер 1 загадал число - ${numberFirstPC}.\n`)

while (numberFirstPC != numberSecondPC){
    console.log(`Компьютер 2: Попробую число ${numberSecondPC}.`)
    if (numberFirstPC < numberSecondPC){
        console.log(`Компьютер 1: Меньше.\n`)
        maxNumber = numberSecondPC
        numberSecondPC = Math.ceil((minNumber + maxNumber - 1)/2)
    } else {
        console.log(`Компьютер 1: Больше.\n`)
        minNumber = numberSecondPC
        numberSecondPC = Math.ceil((minNumber + maxNumber - 1)/2)
    }
}

console.log(`Компьютер 2: Попробую число ${numberSecondPC}.`)
console.log(`Компьютер 1: Угадал!`)
