
function throttling (fn, second = 1, times = 1) {
    var timer
    var timesTemp = 0
    return function () {
        if (timer && timesTemp >= times) {
        } else {
            fn()
            timesTemp++
            timer = setTimeout(function () {
                clearTimeout(timer)
                timer = null
                timesTemp = 0
            }, second * 1000)
        }
    }
}

function foo () {
    console.log('hello')
}
var bar = throttling(foo, 1, 2)

bar()
bar()
bar()
bar()

setTimeout(function () {
    console.log('time out')
    bar()
    bar()
    bar()
}, 2 * 1000)
