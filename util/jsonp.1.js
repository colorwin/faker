function jsonp (url, cb) {
    const script = document.createElement('script')
    script.type = 'script'
    script.src = url + '?callback=' + cb
    document.appendChild(script)
}

jsonp('baidu.com', 'callback')