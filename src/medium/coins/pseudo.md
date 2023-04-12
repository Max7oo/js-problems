# Pseudo Code Solution

const arr = [100, 25, 10, 5, 1]
const coin_amm = [0, 0, 0, 0, 0]

function coins ( ammount) {
    let x = ammount //copy of the start
    let i = 0
    while( x >= 1) {
        if ( x >= arr[i] ) {
            x -= arr[i]
            coin_amm[i] ++
            continue
        }
        i ++
    }
}