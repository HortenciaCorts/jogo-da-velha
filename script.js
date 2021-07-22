const square = document.querySelectorAll('.square');
let message = document.querySelector('#message')
let player = 'X';
let winner = '';

square.forEach(function (item) {
    item.addEventListener('click', function () {
        if (winner === "") {
            if (item.innerHTML === "") {
                if (player === 'X') {
                    item.innerHTML = player
                    player = 'O'
                } else if (player === 'O') {
                    item.innerHTML = player
                    player = 'X'
                }
                message.innerHTML = `Jogador ${player}`
                rules()
            }
        }
    })
})

function rules() {
    const l1 = document.querySelectorAll('.l1')
    let arrayL1 = [];
    l1.forEach((item) => arrayL1.push(item.innerHTML))

    const l2 = document.querySelectorAll('.l2')
    let arrayL2 = [];
    l2.forEach((item) => arrayL2.push(item.innerHTML))

    const l3 = document.querySelectorAll('.l3')
    let arrayL3 = [];
    l3.forEach((item) => arrayL3.push(item.innerHTML))
    
    if (
        //linhas
        (arrayL1[0] === "X" && arrayL1[1] === "X" && arrayL1[2] === "X") ||
        (arrayL2[0] === "X" && arrayL2[1] === "X" && arrayL2[2] === "X") ||
        (arrayL3[0] === "X" && arrayL3[1] === "X" && arrayL3[2] === "X") ||
        //colunas
        (arrayL1[0] === "X" && arrayL2[0] === "X" && arrayL3[0] === "X") ||
        (arrayL1[1] === "X" && arrayL2[1] === "X" && arrayL3[1] === "X") ||
        (arrayL1[2] === "X" && arrayL2[2] === "X" && arrayL3[2] === "X") ||
        //vertical
        (arrayL1[0] === "X" && arrayL2[1] === "X" && arrayL3[2] === "X") ||
        (arrayL1[2] === "X" && arrayL2[1] === "X" && arrayL3[0] === "X")
    ) {
        winner = 'X'
    } else if (
        //linhas
        (arrayL1[0] === "O" && arrayL1[1] === "O" && arrayL1[2] === "O") ||
        (arrayL2[0] === "O" && arrayL2[1] === "O" && arrayL2[2] === "O") ||
        (arrayL3[0] === "O" && arrayL3[1] === "O" && arrayL3[2] === "O") ||
        //colunas
        (arrayL1[0] === "O" && arrayL2[0] === "O" && arrayL3[0] === "O") ||
        (arrayL1[1] === "O" && arrayL2[1] === "O" && arrayL3[1] === "O") ||
        (arrayL1[2] === "O" && arrayL2[2] === "O" && arrayL3[2] === "O") ||
        //vertical
        (arrayL1[0] === "O" && arrayL2[1] === "O" && arrayL3[2] === "O") ||
        (arrayL1[2] === "O" && arrayL2[1] === "O" && arrayL3[0] === "O")
    ) {
        winner = 'O'
    } else if ((arrayL1.indexOf('') === -1 && arrayL2.indexOf('') === -1 && arrayL3.indexOf('') === -1)) {
        winner = 'end'
    }

    theEnd()
}

function theEnd() {
    if (winner != "" && winner != "end") {
        message.innerHTML = `O Jogador ${winner} ganhou!`
        console.log(`O Jogador ${winner} ganhou!`)
        createButton()
    } else if (winner === "end") {
        message.innerHTML = `Fim de jogo, ninguém ganhou!`
        createButton()
    }
}

function createButton(){
    const settings = document.querySelector('.settings');
    const button = document.createElement('button');
    button.innerHTML = 'Reiniciar Jogo';
    settings.appendChild(button)
    button.addEventListener('click', reload)
}

function reload(){
    window.location.reload()
}