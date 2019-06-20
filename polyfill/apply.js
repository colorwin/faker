Function.prototype.call2 = function (content, arr) {
    content.fn = this
    const result = content.fn(...arr)
    delete content.fn
    return result
}

const bar = {
    name: 'bar'
}
function foo (one, two) {
    console.log({one, two})
    console.log(this.name)
}

foo.call2(bar, ['hello', 'world'])