const status = {
    pedding: 'pedding',
    fullfilled: 'fullfilled',
    rejected: 'rejected'
}

function Promise1 (fn) {
    this.status = status.pedding
    this.onFullfilledArr = []
    this.onRejectedArr = []

    const resolve = (value) => {
        if (this.status === status.pedding) {
            this.value = value
            this.status = status.fullfilled
            this.onFullfilledArr.forEach(function (fn) {
                fn()
            })
        }
    }

    const reject = (reason) => {
        if (this.status === status.pedding) {
            this.reason = reason
            this.status = status.rejected
            this.onRejectedArr.forEach(function (fn) {
                fn()
            })
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

function isThenable (x) {
    return x && typeof x.then === 'function'
}

function isObjectOrFunction (x) {
    return x !== null && (typeof x === 'object' || typeof x === 'function')
}

function resolvePromise (promise2, x, resolve, reject) {
    if (x === promise2) {
        throw new Error('循环引用')
    }
    if (isObjectOrFunction(x)) {
        if (isThenable(x)) {
            try {
                x.then(function (y) {
                    resolvePromise(promise2, y, resolve, reject)
                }, function (e) {
                    reject(e)
                })
            } catch (e) {
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}

Promise1.prototype.then = function (onFullfilled, onRejected) {
    let promiseElse
    if (this.status === status.fullfilled) {
        promiseElse = new Promise1((resolve, reject) => {
            setTimeout(() => {
                try {
                    const x = onFullfilled(this.value)
                    resolvePromise(promiseElse, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    } else if (this.status === status.rejected) {
        promiseElse = new Promise1((resolve, reject) => {
            setTimeout(() => {
                try {
                    const x = onRejected(this.reason)
                    resolvePromise(promiseElse, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    } else if (this.status === status.pedding) {
        promiseElse = new Promise1((resolve, reject) => {
            this.onFullfilledArr.push(() => {
                setTimeout(() => {
                    try {
                        const x = onFullfilled(this.value)
                        resolvePromise(promiseElse, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            this.onRejectedArr.push(() => {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(promiseElse, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        })
    }
    return promiseElse
}

new Promise1(function (resolve, reject) {
    resolve(1)
})
.then(function (value) {
    console.log(value)
}, function (err) {
    console.log({err})
})