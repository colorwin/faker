import { V4MAPPED } from "dns";

const data = {
    name: 'ycs'
}
observe(data)

function updateComponent(value) {
    vm._update()
    // document.querySelector('div').innerHTML = value
}

new Watcher(data, 'name', updateComponent)
data.name = 'foo'

function observe(obj) {
    Object.keys(obj).map((v, k) => {
        defineReactive(obj, k, v)
    })
}

function defineReactive (obj, k, v) {
    if (isObject(v)) {
        observe(v)
    }
    const dep = new Dep()
    Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get() {
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return v
        },
        set(nV) {
            v = nV
            dep.notify()
        }
    })
}

class Dep {
    constructor() {
        this.subs = []
    }
    addSub(target) {
        this.subs.push(target)
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
Dep.target = null

class Watcher {
    constructor(data, key, cb) {
        Dep.target = this
        this.data = data
        this.key = key
        this.cb = cb
        this.value = this.data[key]
        Dep.target = null
    }
    update() {
        this.value = this.data[this.key]
        this.cb(this.value)
    }

    before () {
        callHook('beforeUpdate')
    }
}
