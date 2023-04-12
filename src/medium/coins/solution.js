const arr = [100, 25, 10, 5, 1]
const coin_amm = [0, 0, 0, 0, 0]

function coins ( ammount) {
    let x = ammount //copy of the start
    let i = 0
    while( x >= 1) {
        console.log("current position:", i)
        if ( x >= arr[i] ) {
            console.log("current ammount: ",x)
            x -= arr[i]
            coin_amm[i] ++
            continue
        }
        i ++
    }

    return coin_amm
}

console.log(coins(107))