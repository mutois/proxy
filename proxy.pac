function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.google.com")) {
        return "DIRECT";  // Googleのサイトにはプロキシを使わない
    } else {
        return "PROXY 104.20.178.161:80";  // それ以外のサイトはプロキシを経由
    }
}
