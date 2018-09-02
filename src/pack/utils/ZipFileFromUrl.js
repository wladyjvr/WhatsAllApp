/*
*   Copyright (c) Diego Carvallo - https://github.com/sapeish
* */

const ZipFileFromUrl = (zipInstance, name, url, id, callback, o) => {
    if (!url)
        return this

    const xhrmethod = 'GET'
    const xhrtype = o.xhrtype ? o.xhrtype : 'arraybuffer'

    const fetched = (data) => {
        zipInstance.file.call(zipInstance, name, data, o)
        callback(id)
    }

    const xhr = new XMLHttpRequest()
    if(xhrtype === 'textplain') {

        xhr.open(xhrmethod, url, true)
        if (xhr.overrideMimeType)
            xhr.overrideMimeType('text/plain; charset=x-user-defined')
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                fetched(this.responseText)
            }
        }
        xhr.send()
    }
    else if(xhrtype === 'arraybuffer') {
        xhr.open(xhrmethod, url, true);
        xhr.responseType = 'arraybuffer'
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                fetched(this.response)
            }
        }
        xhr.send()
    }
    else if(xhrtype === 'blob') {
        xhr.open(xhrmethod, url, true)
        xhr.responseType = 'blob'
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    fetched(e.target.result)
                };
                reader.readAsArrayBuffer(this.response)
            }
        };
        xhr.send()
    }

    return this
}

export default ZipFileFromUrl