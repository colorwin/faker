function throttling (fn, time = 1) {
    var timer 
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(function () {
            clearTimeout(timer)
            timer = null
            fn()
        }, time * 1000)
    }
}
function foo () {
    console.log('hello')
}
var bar = throttling(foo, 1)

setInterval(function () {
    bar()
}, 0.5 * 1000)
