function throttling (fn, wait = 1) {
    var last = new Date() 
    return function () {
        var now = new Date()
        if (now - last > wait * 1000) {
            fn()
            last = new Date()
        }
    }
}
function foo () {
    console.log('hello')
}
var bar = throttling(foo, 1)

setInterval(function () {
    bar()
}, 0.5 * 1000)
