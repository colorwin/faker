function apiCall(arg, callback) {
    if (typeof arg !== 'string') {
        process.nextTick(callback,
            new TypeError('argument should be string'));
        console.log('normal')
    }
}
apiCall(1, function () {
    console.log('defer callback', arguments)
})
