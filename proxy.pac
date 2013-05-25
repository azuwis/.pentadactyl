var direct = "DIRECT";
var proxy = "SOCKS5 127.0.0.1:7070";
var deny = "PROXY 127.0.0.1:65535";

function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) {
        return direct;
    }
    if (dnsDomainLevels(host) === 1) {
        if (false
        //MARK1
        ) {
            return proxy;
        }
    }
    if (false
    //MARK2
    ) {
        return proxy;
    }

    return direct;
}
