//将对象拼接成url
export function objChangeUrl(obj) {
    let url = ''
    // for ( var key in obj ){
    //     if ( (!obj[key]&&obj[key]!=0) || obj[key] === ''|| obj[key] === []||(obj[key]&&obj[key].length===0)){
    //         delete obj[key]
    //     }
    // }
    for (let key in obj) {
        if (url) {
            url = url + '&' + key + "=" + obj[key]
        } else url = key + "=" + obj[key]
    }
    return url;
}
export default {
    objChangeUrl
}