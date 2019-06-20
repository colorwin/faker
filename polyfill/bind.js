if (!Function.prototype.bind2) {
    Function.prototype.bind2 = function (content) {
        var fn = this
        var rest = Array.prototype.slice(arguments, 1)
        function fNOP () {}
        function fBound () {
            var rest2 = Array.prototype.slice.call(arguments)
            return fn.apply(this instanceof fNOP ? this : content, rest.concat(rest2))
        }
        // Object.setPrototypeOf(fBound.prototype, fn.prototype)
        fNOP.prototype = fn.prototype
        fBound.prototype = new fNOP()
        return fBound
    }
}

const foo = {
    name: 'foo'
}
function bar (one, two) {
    this.a = one
    console.log({one, two})
    console.log(this)
}

bar.prototype.speak = function () {
    console.log('speak')
}

const baz = bar.bind2(foo, 'hello')
const retBind = bar.bind(foo, 'hello')

const bazInstance = new baz()
console.log(bazInstance, 'mybind')
bazInstance.speak()

const bindInstance = new retBind()
console.log(bindInstance, 'bind')
bindInstance.speak()
