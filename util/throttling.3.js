function throttling (fn, wait) {
    let prev = 0
    let timer
    return function (...args) {
        const now = Date.now()
        const self = this
        const remain = now - (now - prev)
        if (remain <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            fn.apply(self, args)
            prev = Date.now()
        } else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(self, args)
                prev = Date.now()
                timer = null
                clearTimeout(timer)
            }, remain);
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
