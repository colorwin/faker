function myNew (fn, ...rest) {
    const obj = {}
    Object.setPrototypeOf(obj, fn.prototype)
    const result = fn.apply(obj, rest)
    return result instanceof Object ? result : obj
}

function Son (name) {
    this.name = name
    return {}
}

Son.prototype.speak = function () {
    console.log('speak')
}

const son = myNew(Son, 'Mike')
console.log(son.name)
son.speak()
