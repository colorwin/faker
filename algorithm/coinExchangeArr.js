const cache = {}
function coinExchangeArr (coins, amount) {
    if (cache[amount]) {
        return cache[amount]
    }
    // 遍历
    // 比较新老 min 数组
    let lastMinArr = []
    let minArr = []
    for (let i = 0; i < coins.length; i++) {
        const newAmount = amount - coins[i]
        if (newAmount >= 0) {
            lastMinArr = coinExchangeArr(coins, newAmount)
            if (
                lastMinArr.length + 1 < minArr.length || !minArr.length
            ) {
                minArr = lastMinArr.concat(coins[i])
            }
        }
    }
    cache[amount] = minArr
    return minArr
}
const coins = [1, 3, 4]
const result = coinExchangeArr(coins, 6)
console.log(result)