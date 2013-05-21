var direct = "DIRECT";
var proxy = "SOCKS5 127.0.0.1:7070";
var deny = "PROXY 127.0.0.1:65535";

function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".google.com")
    //MARK
    ) {
        return proxy;
    }

    return direct;
}
