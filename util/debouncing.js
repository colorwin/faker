function debouncing (fn, time = 1) {
    var timer 
    return function () {
        if (timer) {
            clearTimeout(timer)
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

var bar = debouncing(foo, 1)

setInterval(function () {
    bar()
}, 0.5 * 1000)