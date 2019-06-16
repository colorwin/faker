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
                (lastMinArr.length + 1 < minArr.length || !minArr.length)
              && (lastMinArr.length || !newAmount)
            ) {
                minArr = lastMinArr.concat(coins[i])
            }
        }
    }
    cache[amount] = minArr
    return minArr
}
const coins = [ 5, 10, 25, 1]
const result = coinExchangeArr(coins, 36)
console.log(result)