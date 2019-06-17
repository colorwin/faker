// let coins = [1, 5, 10, 25]
let coins = [1, 3, 4]
coins = coins.sort((a, b) => {
    return b - a
})
function coinExchangeGreedy (need, arr) {
    if (need === 0) {
        return arr
    }
    for (let i = 0; i < coins.length; i++) {
        const newNeed = need - coins[i]
        if (newNeed >= 0) {
            arr.push(coins[i])
            return coinExchangeGreedy(newNeed, arr)
        }
    }
}
const result = coinExchangeGreedy(6, [])
console.log(result)