const Promise1 = require('./promise')

new Promise1(function (resolve, reject) {
    resolve(1)
})
.then(function (value) {
    console.log(value)
}, function (err) {
    console.log({err})
})
