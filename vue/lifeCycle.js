new Vue({})

Vue.prototype._init = function (option) {
    // 挂载属性
    initLifeCycle(vm)
    // 初始化事件、钩子函数
    initEvent(vm)
    // 编译 slote vnode
    initRender(vm)
    callHook(vm, 'beforeCreated')

    initRejection(vm)
    // 完成数据响应式 data prop watch computed methods
    initState(vm)
    initProvide(vm)
    cookHook('created')

    if (vm.$option.el) {
        vm.$mounted(vm.$option.el)
    }
}

function mountConponent (vm) {
    if (!vm.$option.render) {
        const { render } = compileToFunction()
        vm.$option.render = render
    }
    callHook('beforeMounted')
    const vdom = vm.$option.render()
    vm._update(vdom)
    callHook('mounted')
}

function queueWatcher (watcher) {
    nextTick(flushSchedulerQueue)
}

function flushSchedulerQueue () {
    for () {
        // callHook('beforeUpdate')
        watcher.before()
        watcher.update()
        callHook('updated')
    }
}

Vue.prototype.$destory = function () {
    callHook('beforeDestory')
    // 删除节点自身
    remove()
    // 删除依赖
    watcher.tearDown()
    // 删除监听
    vm.$off()
    callHook('afterDestory')
}