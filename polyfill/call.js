Function.prototype.call2 = function (content = window, ...rest) {
    content.fn = this
    const result = content.fn(...rest)
    delete content.fn
    return result
}

const bar = {
    name: 'bar'
}
function foo (msg) {
    console.log({msg})
    console.log(this.name)
}

foo.call2(bar, 'hello')