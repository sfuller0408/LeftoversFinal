class Common {
    Common() {}
    
    send(url) {
        console.log(url);
        window.location.replace(url);
    }
}

exports.Common = Common;