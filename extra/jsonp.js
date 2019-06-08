function jsonp (params, url) {
    const script = document.createElement('script')
    script.src = url + params.callback
    document.appendChild(script)
}

function callback (data) {
    console.log(`jsonp data is ${data}`)
}
jsonp({foo: 'bar', callback: 'callback'}, 'http:www.baidu.com?callback=')