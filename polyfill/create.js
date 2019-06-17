function iCreate (obj) {
    function fNOP () {}
    fNOP.prototype = obj
    return new fNOP()
}

var obj = {
    foo () {
        console.log('hello')
    }
}

var bar = iCreate(obj)
bar.foo()