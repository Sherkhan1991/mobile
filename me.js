function FindProxyForURL(url, host) {
 // Bypass the proxy for *.googe.com
 if (dnsDomainIs(host, ".google.com")) {
               return "DIRECT";
 }
 return "PROXY http://127.0.0.1:18080";
 } // End of function
