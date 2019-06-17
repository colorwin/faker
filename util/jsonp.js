function jsonp (params, url, callback) {
    const script = document.createElement('script')
    let src = url + callback
    for (let key in params) {
        src += `&${key}=${params[key]}`
    }
    script.src = src
    document.appendChild(script)
}

function callback (data) {
    console.log(`jsonp data is ${data}`)
}
jsonp({foo: 'bar'}, 'http:www.baidu.com?callback=', 'callback')