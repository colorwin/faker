const cache = {}
cache[0] = 0
const coins = [1, 5, 10, 25]
function coinChangeCount (amount) {
    if (cache[amount] !== undefined) {
        return cache[amount]
    }
    let min = Number.MAX_VALUE
    for (let i = 0; i < coins.length; i++) {
        if (amount - coins[i] >= 0) {
            const lastMin = coinChangeCount(amount - coins[i])
            min = Math.min(min, lastMin + 1)
        }
    }
    cache[amount] = min
    return min
}

const result = coinChangeCount(36)
console.log(result)